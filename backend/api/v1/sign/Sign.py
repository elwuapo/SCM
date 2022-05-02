# Imports Python

# Imports Django
from django.contrib.auth.models import User
from django.contrib.auth import login
from django.core.files.uploadedfile import InMemoryUploadedFile

# Imports Django Library
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response
from rest_framework import permissions
from knox.views import LoginView
from rest_framework.views import APIView

from api.models import Account, Business, WorkingHours

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

            account     = Account.objects.get(user = user)
            business    = Business.objects.filter(employees__pk = account.pk).first()
            #business_id = business.id

            response = super(SignIn, self).post(request, format=None)

            response.data['fullName']    = str(user.first_name) + ' ' + str(user.last_name)
            response.data['role']        = account.role
            response.data['avatar']      = account.avatar.url
            response.data['businessId']  = business.pk

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
            business   = Business.objects.get(name = data['business'])
            
            if(type(data['avatar']) is InMemoryUploadedFile):
                avatar = data['avatar']
            else:
                avatar = None
            
            user = User.objects.create_user(
                username = username, 
                first_name = first_name,
                last_name = last_name,
                email = email, 
            )

            user.set_password('scmpass1')
            user.save()

            working_hours = WorkingHours()
            working_hours.save()

            account = Account(
                user = user,
                avatar = avatar,
                role = role,
                working_hours = working_hours
            )
            user.save()

            business.employees.add(account)

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