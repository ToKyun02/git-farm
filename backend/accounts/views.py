from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.
class GitHubLoginCallbackView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        user = request.user
        if not user.is_authenticated:

            return Response({'error': '로그인이 필요합니다'}, status=401)
       
        refresh = RefreshToken.for_user(user)

        return Response({
           'access':str(refresh.access_token),
           'refresh':str(refresh)
        })
