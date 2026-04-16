from django.shortcuts import redirect
from django.conf import settings
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.views import TokenRefreshView


# Create your views here.
class GitHubLoginCallbackView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [AllowAny]
    
    def get(self, request):
        user = request.user
        if not user.is_authenticated:

            return Response({'error': '로그인이 필요합니다'}, status=401)
       
        refresh = RefreshToken.for_user(user)
        response = redirect('http://localhost:5173/')
        response.set_cookie('access', str(refresh.access_token), max_age=10800, secure=not settings.DEBUG, httponly=True, samesite='Lax')
        response.set_cookie('refresh', str(refresh), max_age=604800, secure=not settings.DEBUG, httponly=True, samesite='Lax')
        return response

    
def login(request):
    return redirect('/api/auth/social/login/github/')


class CookieTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        # 1. 쿠키에서 refresh 토큰 꺼내기
        refresh_token = request.COOKIES.get('refresh')
        
        # 2. 없으면 401 응답
        if refresh_token is None:
            return Response(status=401)
        
        # 3. request.data에 refresh 토큰 넣어주기 (부모가 읽도록)
        request.data['refresh'] = refresh_token
        
        # 4. 부모의 post 메서드 호출 → 새 access 토큰이 응답에 담겨옴
        response = super().post(request, *args, **kwargs)
        
        # 5. 응답에서 새 access 토큰 꺼내서 쿠키에 담기
        new_access = response.data.get('access')
        response.set_cookie('access', new_access, max_age=10800, secure=not settings.DEBUG, httponly=True, samesite='Lax')
        
        return response
    

class LogoutView(APIView):
    
    def post(self, request):
        response = Response(status=204)
        response.delete_cookie('access')
        response.delete_cookie('refresh')
        return response
    
    
class UserMeView(APIView):

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    

    def patch(self, request):
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)