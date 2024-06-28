from rest_framework import serializers
from .models import Author, Category, Book, Order

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
        fields = [
            'id', 'title', 'publisher', 'description', 'language', 'likes',
            'price', 'year_of_publishing', 'isbn', 'img_url', 'created_at',
            'author', 'category', 'sold_on_credit', 'sales'
        ]
        #['id','title','publisher','description','language','likes','year_of_publishing','category','author','price','created_at']
              
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
        

        
