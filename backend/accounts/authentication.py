from rest_framework_simplejwt.authentication import JWTAuthentication

class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        # 1. 쿠키에서 토큰 꺼내기
        raw_token = request.COOKIES.get('access')

        # 2. 토큰이 없으면
        if raw_token is None:
            return None

        # 3. 토큰 검증하고 유저 가져오기
        validated_token = self.get_validated_token(raw_token)
        user = self.get_user(validated_token)
        return (user, validated_token)