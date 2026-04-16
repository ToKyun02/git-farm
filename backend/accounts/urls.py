from django.urls import path
from .views import GitHubLoginCallbackView, LogoutView, login

urlpatterns = [
    path('callback/', GitHubLoginCallbackView.as_view()),
    path('login/', login),
    path('logout/', LogoutView.as_view()),
]