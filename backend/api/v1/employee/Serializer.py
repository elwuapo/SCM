from django.contrib.auth.models import User
from rest_framework import serializers

class Serializer1(serializers.ModelSerializer):
    username   = serializers.CharField(required = False)
    first_name = serializers.CharField(required = False)
    last_name  = serializers.CharField(required = False)
    email      = serializers.EmailField(required = False)
    
    class Meta:
        model  = User
        fields = [ 
            'username', 
            'firstname', 
            'lastname', 
            'email',
        ]