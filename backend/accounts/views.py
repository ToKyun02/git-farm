from django.shortcuts import redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.authentication import SessionAuthentication

# Create your views here.
class GitHubLoginCallbackView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [AllowAny]
    
    def get(self, request):
        user = request.user
        if not user.is_authenticated:

            return Response({'error': '로그인이 필요합니다'}, status=401)
       
        refresh = RefreshToken.for_user(user)

        return redirect(f'http://localhost:5173/callback?access={str(refresh.access_token)}&refresh={str(refresh)}')
