from django.shortcuts import render
import jwt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from users.models import Profile
from users.serializers import ProfileSerializer
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

# to view profile of a single person
@api_view(['GET'])
def view_profile(request, user_id):
    try:
        profile = Profile.objects.get(user_id=user_id)
        serializer = ProfileSerializer(profile, many=False)
    except:
        return Response({'error':'Profile does not exist'})
    return Response(serializer.data)

# to create a new profile
@api_view(['POST'])
def create_profile(request):
    serializer = ProfileSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)