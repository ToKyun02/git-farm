import GithubIcon from '@/components/icons/GithubIcon';
import { Building2, Coins, GitCommit, Shield, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

export const VILLAGE_TILES = [
    { emoji: '🏠', label: 'Lv.2', color: 'bg-rose-200 dark:bg-rose-900/40' },
    { emoji: '🏢', label: 'Lv.3', color: 'bg-blue-200 dark:bg-blue-900/40' },
    { emoji: '☕', label: 'Lv.1', color: 'bg-orange-200 dark:bg-orange-900/40' },
    { emoji: '🌿', label: 'Lv.2', color: 'bg-green-200 dark:bg-green-900/40' },
    { emoji: '💻', label: 'Lv.2', color: 'bg-purple-200 dark:bg-purple-900/40' },
    { emoji: '🏠', label: 'Lv.1', color: 'bg-sky-200 dark:bg-sky-900/40' },
    { emoji: '🚧', label: '빈 땅', color: 'bg-gray-100 dark:bg-gray-800/40' },
    { emoji: '🏡', label: 'Lv.3', color: 'bg-amber-200 dark:bg-amber-900/40' },
    { emoji: '🚧', label: '빈 땅', color: 'bg-gray-100 dark:bg-gray-800/40' },
] as const;

export const STATS = [
    { label: '총 커밋', target: 1_240_000, icon: <GitCommit className='h-5 w-5' />, resource: 'commits' as const },
    { label: '활성 유저', target: 8_200, icon: <Users className='h-5 w-5' />, resource: 'stars' as const },
    { label: '건설된 건물', target: 47_000, icon: <Building2 className='h-5 w-5' />, resource: 'energy' as const },
    { label: '총 획득 골드', target: 94_000_000, icon: <Coins className='h-5 w-5' />, resource: 'gold' as const },
];

export const STEPS = [
    {
        icon: <GithubIcon className='h-8 w-8' />,
        title: 'GitHub 연동',
        desc: 'GitHub 계정을 연결하면 실시간으로 커밋을 감지합니다. PR·이슈·코드 리뷰까지 모두 인식해요.',
        gradient: 'from-blue-400/20 to-indigo-400/20',
        border: 'border-blue-300/50 dark:border-blue-700/50',
        num: '01',
    },
    {
        icon: <Coins className='h-8 w-8 text-yellow-500' />,
        title: '골드 획득',
        desc: '커밋할 때마다 코드 변경량에 따라 골드가 지급됩니다. feat > fix > docs 순으로 보상이 달라요.',
        gradient: 'from-yellow-400/20 to-amber-400/20',
        border: 'border-yellow-300/50 dark:border-yellow-700/50',
        num: '02',
    },
    {
        icon: <Building2 className='h-8 w-8 text-emerald-500' />,
        title: '마을 건설',
        desc: '획득한 골드로 마을에 건물을 짓고 업그레이드 하세요. 코딩할수록 마을이 성장합니다.',
        gradient: 'from-emerald-400/20 to-green-400/20',
        border: 'border-emerald-300/50 dark:border-emerald-700/50',
        num: '03',
    },
];

export const FEATURES = [
    { icon: <Zap className='h-6 w-6 text-yellow-500' />, title: '실시간 커밋 감지', desc: 'Webhook으로 커밋 즉시 감지 & 골드 지급. 0.5초 내 반응해요.' },
    { icon: <Building2 className='h-6 w-6 text-blue-500' />, title: '3D 마을 건설', desc: '아이소메트릭 3D 뷰로 마을을 직접 보고 건설하세요.' },
    { icon: <TrendingUp className='h-6 w-6 text-emerald-500' />, title: '성장 통계', desc: '커밋 패턴, 활동 그래프, 언어별 통계를 시각화해 제공합니다.' },
    { icon: <Users className='h-6 w-6 text-purple-500' />, title: '글로벌 랭킹', desc: '전 세계 개발자와 마을 크기, 총 커밋 수를 비교해 보세요.' },
    { icon: <Shield className='h-6 w-6 text-rose-500' />, title: '업적 시스템', desc: '100일 연속 커밋, 오픈소스 기여 등 다양한 업적을 달성하세요.' },
    { icon: <Sparkles className='h-6 w-6 text-amber-500' />, title: '특별 아이템', desc: '특정 조건 달성 시 희귀 건물·장식품·이펙트 언락!' },
];

export const BUILDINGS = [
    { emoji: '🏠', name: '주택', description: '개발자의 안식처. 커밋마다 경험치를 획득합니다.', cost: 100, level: 2, maxLevel: 5, bonus: '+5 XP/커밋', status: 'owned' as const },
    { emoji: '🏢', name: '오피스', description: '생산성의 심장부. 골드 획득량이 증가합니다.', cost: 500, level: 3, maxLevel: 5, bonus: '+15% 골드', status: 'owned' as const },
    { emoji: '☕', name: '카페', description: '영감의 원천. 에너지 회복 속도가 빨라집니다.', cost: 300, level: 1, maxLevel: 5, bonus: '+10 에너지/일', status: 'available' as const },
    { emoji: '💻', name: '서버룸', description: '데이터의 심장. 실시간 처리 능력을 강화합니다.', cost: 1000, level: 0, maxLevel: 5, bonus: '+30% 처리속도', status: 'available' as const },
    { emoji: '🌿', name: '공원', description: '휴식과 영감. 모든 건물의 효율이 소폭 오릅니다.', cost: 750, level: 0, maxLevel: 5, bonus: '+5% 전체 효율', status: 'locked' as const },
];

export const DEMO_COMMITS = [
    { id: 1, hash: 'a1b2c3d', message: 'feat: Add dark mode support', author: 'Alice', timestamp: '방금 전', additions: 142, deletions: 8, reward: 45, repo: 'my-app', status: 'new' as const },
    { id: 2, hash: 'e4f5g6h', message: 'fix: Resolve login redirect issue', author: 'Bob', timestamp: '2분 전', additions: 23, deletions: 12, reward: 15, repo: 'backend', status: 'new' as const },
    {
        id: 3,
        hash: 'i7j8k9l',
        message: 'refactor: Improve DB query',
        author: 'Charlie',
        timestamp: '5분 전',
        additions: 87,
        deletions: 94,
        reward: 30,
        repo: 'api-server',
        status: 'processed' as const,
    },
    { id: 4, hash: 'm1n2o3p', message: 'docs: Update API documentation', author: 'Dana', timestamp: '12분 전', additions: 56, deletions: 20, reward: 12, repo: 'docs', status: 'processed' as const },
];

export const CTA_FLOATS = [
    { emoji: '🏠', pos: 'top-4 left-8', delay: 0 },
    { emoji: '🏢', pos: 'top-8 right-8', delay: 0.8 },
    { emoji: '🌿', pos: 'bottom-4 left-16', delay: 0.4 },
    { emoji: '☕', pos: 'bottom-8 right-16', delay: 1.2 },
];
