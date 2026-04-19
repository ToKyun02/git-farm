import requests
from game.models import CommitLog, CurrencyLog
from django.utils import timezone
from django.utils.dateparse import parse_datetime
from django.db import transaction
from zoneinfo import ZoneInfo

KST = ZoneInfo('Asia/Seoul')

def fetch_github_commits(user):
    headers = {
        'Authorization': f'Bearer {user.github_access_token}'
    }
    
    # 이미 저장된 커밋 hash 가져오기
    existing_hashes = set(CommitLog.objects.filter(user=user).values_list('commit_hash', flat=True))
    
    repos_url = 'https://api.github.com/user/repos'
    repos_response = requests.get(repos_url, headers=headers)
    repos = repos_response.json()
    
    public_repos = [r for r in repos if not r['private']]
    
    commits = []
    for repo in public_repos:
        commits_url = f'https://api.github.com/repos/{repo["full_name"]}/commits?author={user.username}'
        commits_response = requests.get(commits_url, headers=headers)
        for c in commits_response.json():
            # 이미 저장된 커밋이면 상세 API 호출 안 함
            if c['sha'] in existing_hashes:
                continue
            
            detail = requests.get(c['url'], headers=headers)
            d = detail.json()
            commits.append({
                'repo_name': repo['full_name'],
                'commit_hash': c['sha'],
                'commit_message': c['commit']['message'],
                'additions': d['stats']['additions'],
                'deletions': d['stats']['deletions'],
                'files_changed': len(d['files']),
                'author_date': parse_datetime(d['commit']['author']['date']),
            })
    
    return commits


@transaction.atomic
def process_commits(user):
    commits = fetch_github_commits(user)
    new_commits = 0
    total_gold = 0
    
    for commit in commits:
                
        # 점수 계산: (추가 라인 × 1) + (삭제 라인 × 1.2) + (파일 수 × 5)
        score = (commit['additions'] * 1) + (commit['deletions'] * 1.2) + (commit['files_changed'] * 5)
        gold = max(int(score / 100), 1)  # 최소 1골드
        
        commit_log = CommitLog.objects.create(
            user=user,
            repo_name=commit['repo_name'],
            commit_hash=commit['commit_hash'],
            commit_message=commit['commit_message'],
            additions=commit['additions'],
            deletions=commit['deletions'],
            files_changed=commit['files_changed'],
            gold_earned=gold,
            processed_at=timezone.now(),
        )

        user.gold += gold

        CurrencyLog.objects.create(                                                                                                                                   
            user=user,
            amount=gold,
            reason='commit',
            balance_after=user.gold,
            reference_id=commit_log.id,
            reference_type='commit',
        )
        new_commits += 1
        total_gold += gold
    
    if new_commits > 0:

        new_last_commit_at = max(c['author_date'] for c in commits)

        today_kst = new_last_commit_at.astimezone(KST).date()

        if user.last_commit_at is None:
            user.streak_days = 1
        else:
            prev_kst = user.last_commit_at.astimezone(KST).date()
            diff = (today_kst - prev_kst).days

            if diff == 0:
                pass
            elif diff == 1:
                user.streak_days += 1
            else:
                user.streak_days = 1

        user.last_commit_at = new_last_commit_at
        user.total_commits += new_commits
        user.total_gold_earned += total_gold
        user.save(update_fields=['gold', 'last_commit_at', 'streak_days', 'total_commits', 'total_gold_earned'])
    
    return {
      'new_commits': new_commits,
      'gold_earned': total_gold,
      'current_gold': user.gold,           # 프론트가 추가 쿼리 없이 잔액 표시
      'streak_days': user.streak_days,     # 마일스톤 알림(GIT-53) 연계
      'last_commit_at': user.last_commit_at,
  }