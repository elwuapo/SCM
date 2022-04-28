from django.contrib import admin

from api.models import WorkingDay, WorkingHours, Account

# Register your models here.
admin.site.register(WorkingDay)
admin.site.register(WorkingHours)
admin.site.register(Account)