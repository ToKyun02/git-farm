from django.urls import path
from .views import GitHubLoginCallbackView

urlpatterns = [
    path('callback/', GitHubLoginCallbackView.as_view())
]