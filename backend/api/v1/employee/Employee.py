from rest_framework.response import Response
from rest_framework.views import APIView

class Employee(APIView):
    def get(self, request):
        try:
            return Response(status=200)
        except:
            return Response(status=400)

    def post(self, request):
        try:
            return Response(status=200)
        except:
            return Response(status=400)

    def put(self, request, id):
        try:
            return Response(status=200)
        except:
            return Response(status=400)

    def delete(self, request, id):
        try:
            return Response(status=200)
        except:
            return Response(status=400)