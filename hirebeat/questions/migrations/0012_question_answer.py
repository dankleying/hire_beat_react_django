# Generated by Django 3.0.7 on 2020-09-30 21:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0011_auto_20200925_0019'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='answer',
            field=models.TextField(blank=True, null=True),
        ),
    ]
