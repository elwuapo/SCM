from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class WorkDay(models.Model):
    choices1 = (
        ('monday','monday'),
        ('tuesday','tuesday'),
        ('wednesday','wednesday'),
        ('thursday','thursday'),
        ('friday','friday'),
        ('saturday','saturday'),
        ('sunday','sunday'),
    )
    day = models.CharField(max_length=20, blank=True, null=True, choices=choices1)
    check_in_time = models.TimeField(auto_now=False, auto_now_add=False)
    departure_time = models.TimeField(auto_now=False, auto_now_add=False)

class WorkingHours(models.Model):
    workday = models.ManyToManyField(WorkDay, blank = True)


class Account(models.Model):
    user = models.OneToOneField(User, on_delete = models.CASCADE, primary_key = True)

    choices1 = (
        ('employee','employee'),
        ('manager','manager'),
    )

    def path(self, filename):
        return f'account/{self.user.username}/avatar/{filename}'

    avatar = models.ImageField(upload_to = path, null = True, blank = True)
    role = models.CharField(max_length=20, blank=True, null=True, choices=choices1)
    working_hours = models.ForeignKey(WorkingHours, on_delete = models.CASCADE, blank=True, null=True)

class Business(models.Model):
    name = models.CharField(max_length=99, blank=True, null=True)
    employees = models.ManyToManyField(Account, blank = True)