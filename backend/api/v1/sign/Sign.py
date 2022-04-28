# Imports Python

# Imports Django
from django.contrib.auth.models import User
from django.contrib.auth import login

# Imports Django Library
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response
from rest_framework import permissions
from knox.views import LoginView
from rest_framework.views import APIView

from api.models import Account

# API que verifica las credenciales recibidas logeando al usuario si 
# las credenciales son validas.

class SignIn(LoginView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        try:
            serializer = AuthTokenSerializer(data=request.data)

            serializer.is_valid(raise_exception=True)
            user = serializer.validated_data['user']
            login(request, user)

            response = super(SignIn, self).post(request, format=None)
            
            return response
        except:
            return Response(status = 400)

# Api que crear un usuario y su respectiva cuenta
class SignUp(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        try:
            data = request.data

            username   = data['username']
            first_name = data['first_name']
            last_name  = data['last_name']
            email      = data['email']
            role       = data['role']
            avatar     = data['avatar']
            business   = data['business']

            user = User.objects.create_user(username = username, email = email, password = 'scmpass1')
            user.save()

            account = Account(user = user)
            account.save()

            return Response(status=200)
        except:
            return Response(status = 400)

# Api que validara los datos antes de la creacion el usuario y la cuenta.
class ValidacionAPI(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        try:
            data       = request.data
            username   = data['username']
            first_name = data['first_name']
            last_name  = data['last_name']
            email      = data['email']
            role       = data['role']
            avatar     = data['avatar']

            return Response(status=200)
        except:
            return Response(status = 400)