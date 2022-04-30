from io import BytesIO
import os
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from knox.auth import TokenAuthentication

from api.utils import encode_photo, match
from api.models import Account, Mark
from django.core.files.uploadedfile import InMemoryUploadedFile
from api.models import Browser
from backend.settings import BASE_DIR


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

            try:
                if(type(image) is InMemoryUploadedFile):
                    account = Account.objects.get(user = user)
                    
                    with open(str(os.path.join(BASE_DIR).replace("\\", '/')) + str(account.avatar.url), "rb") as f:
                        enrollments = encode_photo(BytesIO(f.read()))

                    photo  = encode_photo(image.file)
                    
                    match1 = match(photo, enrollments)
                    print(f"Photo match Avatar? {match1[0]}")
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

"""
exist = Browser.objects.filter(id = browser_id).exists()
if(exist):
    browser = Browser.objects.get(id = browser_id)
else:
    browser = Browser(id = browser_id, name = browser_name, os = browser_os)
    browser.save()

mark = Mark(photo = image, place = place, browser = browser)
mark.save()

with open(str(os.path.join(BASE_DIR).replace("\\", '/')) + str(account.avatar.url), "rb") as f:
    enrollments = encode_photo(BytesIO(f.read()))

photo   = open(str(os.path.join(BASE_DIR).replace("\\", '/')) + str(mark.photo.url), "rb")
byte_io = encode_photo(BytesIO(photo.read()))

match1  = match(byte_io, enrollments)

print(f"Photo match Avatar? {match1[0]}")
photo.close()

#verified = match(encode_photo(image.file), enrollments)
#print('verified', verified)
"""