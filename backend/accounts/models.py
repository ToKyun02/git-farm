from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    github_id = models.IntegerField(unique=True)
    avatar_url = models.URLField(blank=True)
    gold = models.IntegerField(default=0)
    github_access_token = models.CharField(max_length=255)
    last_commit_at = models.DateTimeField(null=True, blank=True)
    streak_days = models.IntegerField(default=0)
    total_commits = models.IntegerField(default=0)
    total_gold_earned = models.IntegerField(default=0)
    total_gold_spent = models.IntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)