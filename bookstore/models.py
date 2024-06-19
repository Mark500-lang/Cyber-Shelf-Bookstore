from django.db import models
from django.contrib.auth.models import User

# Author Model
class Author(models.Model):
    name = models.CharField(max_length=700)
    bio= models.CharField(null=True, max_length=800)
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
    description = models.CharField(max_length=700, null=True)
    language = models.CharField(max_length=200)
    likes = models.PositiveBigIntegerField(default=0)
    price = models.PositiveBigIntegerField(default=0)
    year_of_publishing = models.CharField(max_length=200)
    isbn = models.CharField(max_length=200, default="9780957037885")
    img_url = models.CharField(max_length=500, default="https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png")
    created_at = models.DateTimeField(auto_now_add=True)
    
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books_authored')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='books_in_category')
    sold_on_credit = models.BooleanField(null=True, blank=True, db_index=True)

    def __str__(self):
        return self.title

# Order Model
class Order(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    sold_on_credit = models.BooleanField()
    copies = models.PositiveBigIntegerField(default=1)

    def save(self, *args, **kwargs):
        # Update the `sold_on_credit` status of the book
        self.book.sold_on_credit = self.sold_on_credit
        self.book.save()
        super(Order, self).save(*args, **kwargs)

    def __str__(self):
        return f"Order for {self.book.title}, sold on credit: {self.sold_on_credit}"
    
