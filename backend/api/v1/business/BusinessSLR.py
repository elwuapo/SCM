from rest_framework import serializers
from api.models import Business
from api.v1.account.AccountSLR import AccountSerializer1

class BusinessSerializer1(serializers.ModelSerializer):
    name      = serializers.CharField(required = False)
    employees = AccountSerializer1(required = False, many=True)
    
    class Meta:
        model  = Business
        fields = [
            'pk',
            'name',
            'employees',
        ]