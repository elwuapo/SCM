from io import BytesIO
import os
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from knox.auth import TokenAuthentication

#from api.utils import encode_photo, match
from api.models import Account
from django.core.files.uploadedfile import InMemoryUploadedFile
from backend.settings import BASE_DIR

from backend.settings import MEDIA_ROOT

class MarkAPI(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        try:
            return Response(status=200)
        except:
            return Response(status=400)

    def post(self, request):
        try:
            data  = request.data
            user  = request.user
            place = data['place']
            check_in_time  = 'se asigna automaticamente cuando se crea el objeto'
            departure_time = 'se asigna automaticamente cuando se edita el objeto'
            browser_id = data['b_id']
            browser_name = data['b_name']
            browser_os = data['b_os']
            image = data['image']

            account = Account.objects.get(user = user)
            try:
                if(type(image) is InMemoryUploadedFile):
                    byte_io_image = open(str(os.path.join(BASE_DIR).replace("\\", '/')) + str(account.avatar.url), "rb")
                    print(image.file)
                    print(BytesIO(byte_io_image.read()))
                    image.close()

                    #verified = match(encode_photo(image.file), enrollments)
                    #print('verified', verified)
            except:
                print('error')
        
            return Response(status=200)
        except:
            return Response(status=400)

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