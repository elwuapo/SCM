from rest_framework import serializers
from api.models import Business
from api.v1.account.AccountSLR import AccountSerializer1

class BusinessSerializer1(serializers.ModelSerializer):
    name            = serializers.CharField(required = False)
    employees       = AccountSerializer1(required = False, many=True)
    external_system = serializers.BooleanField(required= False)
    redirect_to     = serializers.CharField(required = False)

    class Meta:
        model  = Business
        fields = [
            'pk',
            'name',
            'employees',
            'external_system',
            'redirect_to'
        ]