from django.urls import path 
from .views import BookList, AuthorList, BooksSoldOnCredit, BooksSoldOffCredit, SoldBooks, OrderListCreateView, OrderDetailView

urlpatterns = [
    path('books/', BookList.as_view()),
    path('books/sold-on-credit/', BooksSoldOnCredit.as_view(), name='books-sold-on-credit'),
    path('books/sold-off-credit/', BooksSoldOffCredit.as_view(), name='books-sold-off-credit'),
    path('books/sold/', SoldBooks.as_view(), name='sold-books'),
    path('authors/', AuthorList.as_view()),
    path('orders/', OrderListCreateView.as_view(), name='order-create'),
    path('orders/<int:pk>/', OrderDetailView.as_view(), name='order-detail'),
]