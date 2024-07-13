from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView # type: ignore

from .models import Author, Category, Book, Order, Profile, User
from .serializers import AuthorSerializer, CategorySerializer, BookSerializer, BookCreateSerializer, OrderSerializer, UserSerializer, MyTokenObtainPairSerializer, RegisterSerializer
from django.shortcuts import render

from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer
    
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    if request.method == "GET":
        response = f"Hey {request.user}, You are gwtting a response"
        return Response({'response': response}, status=status.HTTP_200_OK)
    elif request.method == "POST":
        text = request.POST.get("text")
        response = f"Hey {request.user}, your text is {text}"
        return Response({'response': response}, status=status.HTTP_200_OK)
    
    return Response({}, status=status.HTTP_400_BAD_REQUEST)

# Views for Authors    
class AuthorList(generics.ListCreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    
#Views for categories
class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer 
  
# Views for books  
class BookList(generics.ListAPIView):
    queryset = Book.objects.select_related('author', 'category').all()
    serializer_class = BookSerializer   

class BookCreate(generics.CreateAPIView):
    queryset = Book.objects.select_related('author', 'category').all()
    serializer_class = BookCreateSerializer
    
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
