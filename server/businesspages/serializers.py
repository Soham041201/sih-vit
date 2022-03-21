from rest_framework import serializers
from .models import Tag, BusinessPage, Post
from users.serializers import ProfileSerializer

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class BusinessPageSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    owner = ProfileSerializer(many=False)
    followers = ProfileSerializer(many=True)
    class Meta:
        model = BusinessPage
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    likes = ProfileSerializer(many=True)
    class Meta:
        model = Post
        fields = '__all__'