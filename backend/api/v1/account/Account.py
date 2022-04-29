from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from knox.auth import TokenAuthentication

# Imports Python

# Imports Django
from django.contrib.auth.models import User
from django.core.files.uploadedfile import InMemoryUploadedFile

# Imports Django Library
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Account, Business, WorkingHours
from api.v1.account.AccountSLR import AccountSerializer1

class AccountAPI(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, pk):
        try:
            return Response(status=200)
        except:
            return Response(status=400)

    def post(self, request):
        try:
            data = request.data

            username   = data['username']
            first_name = data['first_name']
            last_name  = data['last_name']
            email      = data['email']
            role       = data['role']
            business   = Business.objects.get(pk = data['businessId'])
            
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
            account.save()

            business.employees.add(account)
            
            serializer = AccountSerializer1(account)

            return Response(
                {"account": serializer.data},
                status=200
            )
        except:
            return Response(status = 400)

    def put(self, request, pk):
        try:
            return Response(status=200)
        except:
            return Response(status=400)

    def delete(self, request, pk):
        try:
            return Response(status=200)
        except:
            return Response(status=400)