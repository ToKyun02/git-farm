from django.db import models
from django.conf import settings

# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=50)
    price = models.PositiveIntegerField()
    category = models.CharField(max_length=20)
    asset_key = models.CharField(max_length=100)
    is_limited = models.BooleanField(default=False)
    description = models.TextField(blank=True)
    width = models.PositiveIntegerField(default=1)
    height = models.PositiveIntegerField(default=1)
    image_url = models.URLField(blank=True)
    tier = models.CharField(max_length=20, default='normal')
    is_available = models.BooleanField(default=True)
    sort_order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

class TownItem(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    position_x = models.IntegerField(null=True, blank=True)
    position_y = models.IntegerField(null=True, blank=True)
    is_placed = models.BooleanField(default=False)
    placed_at = models.DateTimeField(null=True, blank=True)
    purchased_at = models.DateTimeField(auto_now_add=True)
    rotation = models.IntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)

class CurrencyLog(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    amount = models.IntegerField()
    reason = models.CharField(max_length=100)
    balance_after = models.IntegerField()
    reference_id = models.IntegerField(null=True, blank=True)
    reference_type = models.CharField(max_length=20, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class CommitLog(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    repo_name = models.CharField(max_length=200)
    commit_hash = models.CharField(max_length=40, unique=True)
    commit_message = models.TextField(blank=True)
    additions = models.IntegerField(default=0)
    deletions = models.IntegerField(default=0)
    files_changed = models.IntegerField(default=0)
    gold_earned = models.IntegerField(default=0)
    branch = models.CharField(max_length=200, blank=True)
    is_valid = models.BooleanField(default=True)
    received_at = models.DateTimeField(auto_now_add=True)
    processed_at = models.DateTimeField(null=True, blank=True)