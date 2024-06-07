from django.db import models
from django.contrib.auth.models import Admin

class Book(models.Model):
    title = models.CharField(max_length=30)
    publisher = models.CharField(max_length=100)
    author = models.ForeignKey(Admin, on_delete = models.CASCADE)
    category = models.CharField(max_length=50)
    
    created_at = models.DateTimeField(auto_now_add=True)
