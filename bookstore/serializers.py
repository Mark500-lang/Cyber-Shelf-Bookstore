from rest_framework import serializers
from .models import Book, Author, Category

class BookSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=Author.objects.all())
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    
    class Meta:
        model = Book
        fields = "__all__"
        #['id','title','publisher','description','language','likes','year_of_publishing','category','author','price','created_at']

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"