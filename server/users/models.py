import email
from enum import unique
from os import link
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, default='')
    user_id = models.CharField(max_length=35, default='')
    username = models.CharField(unique=True, max_length=100, default='')
    email = models.CharField(max_length=100, default='', unique=True)
    linkedIn = models.CharField(max_length=100, default='')
    twitter = models.CharField(max_length=100, default='')
    website = models.CharField(max_length=100, default='')

    def __str__(self):
        return f'{self.name}\'s Profile'