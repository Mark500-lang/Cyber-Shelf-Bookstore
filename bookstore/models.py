from django.db import models
from django.contrib.auth.models import User

# Author Model
class Author(models.Model):
    name = models.CharField(max_length=700)
    bio= models.CharField(max_length=800)
    birth_date = models.DateField(blank=True, null=True)
    
    def __str__(self):
        return self.name
    
# Category Model
class Category(models.Model):
    name = models.CharField(max_length=150)
    
    def __str__(self):
        return self.name

# Books Model
class Book(models.Model):
    title = models.CharField(max_length=200)
    publisher = models.CharField(max_length=200)
    description = models.CharField(max_length=700)
    language = models.CharField(max_length=50)
    likes = models.PositiveBigIntegerField(default=0)
    price = models.PositiveBigIntegerField(default=0)
    year_of_publishing = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    
    author= models.ForeignKey(Author, on_delete = models.CASCADE, related_name='books_authored')
    category = models.ForeignKey(Category, on_delete = models.CASCADE, related_name='books_in_category')
    
    def _str_(self):
        return self.title

