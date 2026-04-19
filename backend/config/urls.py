from django.contrib import admin
from django.urls import path, include

from accounts.views import CookieTokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    # JWT 인증
    path('api/auth/token/refresh/', CookieTokenRefreshView.as_view(), name='token_refresh'),

    # Social OAuth (GitHub, Google 등)
    path('api/auth/social/', include('social_django.urls', namespace='social')),
    
    path('api/game/', include('game.urls')),
]
