# Generated by Django 3.0.7 on 2020-06-14 21:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0019_auto_20200614_2059'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='video',
            name='ai_review_categories',
        ),
        migrations.RemoveField(
            model_name='video',
            name='expert_review_categories',
        ),
    ]
