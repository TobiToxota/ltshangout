# Generated by Django 4.0.5 on 2022-06-20 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('username', models.CharField(max_length=40, unique=True)),
                ('name', models.CharField(blank=True, max_length=40)),
                ('email', models.EmailField(max_length=40, unique=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
                ('avatarStyle', models.CharField(blank=True, max_length=40)),
                ('avatarIteration', models.IntegerField(default=0)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]