from urllib import request
from django.urls import path
from . import views

urlpatterns = [ 
    # path('allprofiles/', views.allproffiles, name='allprofiles'),
    path('viewprofile/<username>/', views.view_profile, name='view_profile'),
    path('createprofile/', views.create_profile, name='create_profile'),
    path('businesspage/<username>/', views.view_businesspage, name='view_businesspage'),
    path('create_tag/', views.create_tag, name='create_tag'),
    path('getposts/<username>/', views.get_businesspage_posts, name='posts'),
    path('list_tags/', views.list_tags, name='list_tags'),
]