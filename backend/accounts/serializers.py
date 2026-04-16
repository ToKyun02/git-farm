from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'github_id', 'gold', 'avatar_url', 'streak_days', 'total_commits', 'total_gold_earned', 'total_gold_spent']
        read_only_fields = ['id', 'github_id', 'gold', 'avatar_url', 'streak_days', 'total_commits', 'total_gold_earned', 'total_gold_spent']
        