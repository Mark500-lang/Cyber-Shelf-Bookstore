from rest_framework import generics
from .models import Author, Book, Order
from .serializers import AuthorSerializer, BookSerializer, OrderSerializer

# Views for Authors    
class AuthorList(generics.ListCreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

# Views for books
class BookListCreate(generics.ListCreateAPIView):
    queryset = Book.objects.select_related('author', 'category').all()
    serializer_class = BookSerializer
    
class   BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.select_related('author', 'category').all()
    serializer_class = BookSerializer

class BooksSoldOnCredit(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        return Book.objects.filter(sold_on_credit=True)
    
class BooksSoldOffCredit(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        return Book.objects.filter(sold_on_credit=False)

class SoldBooks(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        return Book.objects.exclude(sold_on_credit__isnull=True)

# Views for retrieving and creating Orders
class OrderListCreateView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

# Views for other CRUD operations on a specific Order
class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    
#Auth views
