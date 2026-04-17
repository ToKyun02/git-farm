from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .services import process_commits

class SyncCommitsView(APIView):
    def post(self, request):
        result = process_commits(request.user)
        return Response(result)