# Generated by Django 3.2.9 on 2022-05-03 11:42

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20220502_1156'),
    ]

    operations = [
        migrations.AddField(
            model_name='business',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=api.models.Business.path),
        ),
    ]
