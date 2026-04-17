from django.urls import path
from .views import GitHubLoginCallbackView, LogoutView, login, UserMeView

urlpatterns = [
    path('callback/', GitHubLoginCallbackView.as_view()),
    path('login/', login),
    path('logout/', LogoutView.as_view()),
    path('me/', UserMeView.as_view()),
]