from rest_framework import serializers
from api.models import Mark
from api.v1.browser.BrowserSLR import BrowserSerializer1

class MarkSerializer1(serializers.ModelSerializer):
    place          = serializers.CharField(required = False)
    check_in_time  = serializers.DateTimeField(required = False)
    departure_time = serializers.DateTimeField(required = False)
    browser        = BrowserSerializer1(required = False)

    class Meta:
        model  = Mark
        fields = [
            'place',
            'check_in_time',
            'departure_time',
            'browser',
        ]