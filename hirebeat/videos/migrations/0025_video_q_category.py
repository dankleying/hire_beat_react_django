# Generated by Django 3.0.7 on 2020-09-10 00:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0024_label_sentence_transcript'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='q_category',
            field=models.CharField(default='Random', max_length=100),
        ),
    ]