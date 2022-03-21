from django.shortcuts import render
import jwt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from users.models import Profile
from users.serializers import ProfileSerializer
from businesspages.models import Tag, Post, BusinessPage
from businesspages.serializers import PostSerializer, BusinessPageSerializer, TagSerializer
import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
from django.conf import settings

firebase_creds = credentials.Certificate(settings.FIREBASE_CONFIG)
firebase_app = firebase_admin.initialize_app(firebase_creds)

# @api_view(['GET'])
# def allproffiles(request): 
#     authorization_header = request.META.get('HTTP_AUTHORIZATION')
#     token = authorization_header.replace("Bearer ", "")
#     decodedPayload = jwt.decode(token, options={"verify_signature": False})
#     print(decodedPayload)
#     # print(decodedPayload['user_id'])
#     try:
#         decoded_token = auth.verify_id_token(token)
#         firebase_user_id = decoded_token['user_id']      
#         profiles = Profile.objects.all()
#         serializer = ProfileSerializer(profiles, many=True)
#     except:
#         return Response({"data":"User token is invalid"})

#     return Response(serializer.data)

@api_view(['GET'])
def view_profile(request, username):
    try:
        profile = Profile.objects.get(username=username)
        serializer = ProfileSerializer(profile, many=False)
    except:
        return Response({'error':'Profile does not exist'})
    return Response(serializer.data)

@api_view(['POST'])
def create_profile(request):
    serializer = ProfileSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

# businesspage apis
# view a businesspage
@api_view(['GET'])
def view_businesspage(request, username):
    try:
        businesspage = BusinessPage.objects.get(username=username)
        serializer = BusinessPageSerializer(businesspage, many=False)
    except:
        return Response({'error':'Page does not exist'})
    return Response(serializer.data)

# tag create
@api_view(['POST'])
def create_tag(request):
    serializer = TagSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

# list all tags
@api_view(['GET'])
def list_tags(request):
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)

# post for business pages
@api_view(['GET'])
def get_businesspage_posts(request, username):
    try:
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
    except:
        return Response({'error':'Error in fetching posts'})
    
    return Response(serializer.data)


