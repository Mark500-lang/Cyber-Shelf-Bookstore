from django.urls import path 
from rest_framework_simplejwt.views import TokenRefreshView # type: ignore
from .views import BookCreate, BookList, BookDetail, AuthorList, CategoryList, BooksSoldOnCredit, BooksSoldOffCredit, SoldBooks, OrderListCreateView, OrderDetailView, MyTokenObtainPairView, RegisterView, dashboard

urlpatterns = [
    path('books/', BookList.as_view()),
    path('create-book/', BookCreate.as_view()),
    path('books/<int:pk>/', BookDetail.as_view(), name='book-detail'),
    path('books/sold-on-credit/', BooksSoldOnCredit.as_view(), name='books-sold-on-credit'),
    path('books/sold-off-credit/', BooksSoldOffCredit.as_view(), name='books-sold-off-credit'),
    path('books/sold/', SoldBooks.as_view(), name='sold-books'),
    path('authors/', AuthorList.as_view()),
    path('category/', CategoryList.as_view()),
    path('orders/', OrderListCreateView.as_view(), name='order-create'),
    path('orders/<int:pk>/', OrderDetailView.as_view(), name='order-detail'),
    
    path('token/', MyTokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('register/', RegisterView.as_view()),
    path('dashboard/', dashboard)
    
]
