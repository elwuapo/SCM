from django.contrib import admin

from api.models import WorkDay, WorkingHours, Account, Business

# Register your models here.
admin.site.register(WorkDay)
admin.site.register(WorkingHours)
admin.site.register(Account)
admin.site.register(Business)