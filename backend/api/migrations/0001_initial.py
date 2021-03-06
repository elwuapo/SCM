# Generated by Django 3.2.9 on 2022-04-28 19:26

import api.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='WorkingDay',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('working_day', models.CharField(blank=True, choices=[('monday', 'monday'), ('tuesday', 'tuesday'), ('wednesday', 'wednesday'), ('thursday', 'thursday'), ('friday', 'friday'), ('saturday', 'saturday'), ('sunday', 'sunday')], max_length=20, null=True)),
                ('check_in_time', models.TimeField()),
                ('departure_time', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='WorkingHours',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('working_hours', models.ManyToManyField(blank=True, to='api.WorkingDay')),
            ],
        ),
        migrations.CreateModel(
            name='Account',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='auth.user')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to=api.models.Account.path)),
                ('role', models.CharField(blank=True, choices=[('employee', 'employee'), ('manager', 'manager')], max_length=20, null=True)),
                ('working_hours', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.workinghours')),
            ],
        ),
    ]
