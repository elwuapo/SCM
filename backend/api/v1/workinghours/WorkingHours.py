from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from knox.auth import TokenAuthentication

from api.models import Account
#from django.contrib.auth.models import User

class WorkingHoursAPI(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        try:
            user = request.user
            account = Account.objects.get(user = user)
            
            return Response(status=200)
        except:
            return Response(status=400)

    def post(self, request):
        try:
            return Response(status=200)
        except:
            return Response(status=400)

    def put(self, request):
        try:
            return Response(status=200)
        except:
            return Response(status=400)

    def delete(self, request):
        try:
            return Response(status=200)
        except:
            return Response(status=400)