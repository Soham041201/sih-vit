from django.db import models
from users.models import Profile
# Create your models here.

class Tag(models.Model):
    tag = models.CharField(max_length=100, default='')

    def __str__(self):
        return self.tag

class BusinessPage(models.Model):
    owner = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='owner')
    description = models.CharField(max_length=200, default='')
    name = models.CharField(max_length=100, blank=False, default='')
    username = models.CharField(max_length=100, unique=True, default='')
    tags = models.ManyToManyField(Tag, related_name='tags')
    followers = models.ManyToManyField(Profile, related_name='followers')
    email = models.CharField(max_length=100, default='')
    linkedIn = models.CharField(max_length=100, default='')
    twitter = models.CharField(max_length=100, default='')
    website = models.CharField(max_length=100, default='')

    def __str__(self):
        return self.name

class Post(models.Model):
    businesspage = models.ForeignKey(BusinessPage, on_delete=models.CASCADE)
    title = models.CharField(max_length=250, default='')
    body = models.TextField(default='')
    likes = models.ManyToManyField(Profile, related_name='likes', blank=True)

    def __str__(self):
        return f'{self.businesspage.name}\'s Page'

