from django.urls import path
from .views import SyncCommitsView

urlpatterns = [
    path('commits/sync/', SyncCommitsView.as_view()),
]