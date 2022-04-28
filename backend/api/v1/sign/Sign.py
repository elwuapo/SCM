# Imports Python

# Imports Django
from django.contrib.auth.models import User
from django.contrib.auth import login

# Imports Django Library
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response
from rest_framework import permissions
from knox.views import LoginView

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