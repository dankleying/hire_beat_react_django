# Generated by Django 3.0.7 on 2020-07-29 03:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0016_remove_profile_sub_canceled'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='sub_id',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
