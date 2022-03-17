from django.urls import path
from . import views

urlpatterns = [ 
    # path('allprofiles/', views.allproffiles, name='allprofiles'),
    path('viewprofile/<user_id>/', views.view_profile, name='view_profile'),
    path('createprofile/', views.create_profile, name='create_profile'),
]