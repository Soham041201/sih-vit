from django.contrib import admin
from .models import Tag, BusinessPage, Post
# Register your models here.

admin.site.register(Tag)
admin.site.register(BusinessPage)
admin.site.register(Post)