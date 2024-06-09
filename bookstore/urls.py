from django.urls import path 
from .views import BookList, AuthorList 

urlpatterns = [
    path('books/', BookList.as_view()),
    path('authors/', AuthorList.as_view()),
]