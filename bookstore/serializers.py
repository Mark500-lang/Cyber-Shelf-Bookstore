from rest_framework import serializers
from .models import User, Profile, Author, Category, Book, Order

from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer # type: ignore

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
        
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        token['full_name'] = user.profile.full_name
        token['email'] = user.email
        token['bio'] = user.profile.bio
        token['image'] = str(user.profile.image)
        
        return token

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    
    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'password2']
        
    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError(
                {"password": "Password fields do not match"}
            )
        return attrs
    
    def create(self, validated_data):
        user =User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'] 
        )
        user.set_password(validated_data['password'])
        user.save()
        
        return user
    
    
class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class BookSerializer(serializers.ModelSerializer):
    # author = serializers.PrimaryKeyRelatedField(queryset=Author.objects.all())
    # category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    author = AuthorSerializer(read_only=True)
    category = CategorySerializer(read_only=True)
    
    class Meta:
        model = Book
        fields = '__all__'
        # fields = [
        #     'id', 'title', 'publisher', 'description', 'language', 'likes', 'price',
        #     'year_of_publishing', 'isbn', 'img_url', 'author_id', 'category_id',
        #     'sold_on_credit', 'sales', 'in_cart'
        # ] 
        #['id','title','publisher','description','language','likes','year_of_publishing','category','author','price','created_at']
        
class BookCreateSerializer(serializers.ModelSerializer):
    author_id = serializers.PrimaryKeyRelatedField(
        queryset=Author.objects.all(),
        source='author',
        write_only=True
    )
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        source='category',
        write_only=True
    )

    class Meta:
        model = Book
        fields = fields = [
            'id', 'title', 'publisher', 'description', 'language', 'likes', 'price',
            'year_of_publishing', 'isbn', 'img_url', 'author_id', 'category_id',
            'sold_on_credit', 'sales', 'in_cart'
        ]
                
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'