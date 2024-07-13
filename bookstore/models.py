from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

#User Model
class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
     
    def __str__(self):
        return self.username

#Profile Model    
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    full_name = models.CharField(max_length=300)
    bio = models.CharField(max_length=500)
    image = models.ImageField(default='default.jpg', upload_to='user_images')
    
    def __str__(self):
        return self.full_name

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
    
post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)
    
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
    sales = models.PositiveBigIntegerField(default=0)
    in_cart = models.BooleanField(default=False, db_index=True)
    
    def __str__(self):
        return self.title

# Order Model
class Order(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    sold_on_credit = models.BooleanField()
    copies = models.PositiveBigIntegerField(default=1)
    in_cart = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        self.book.sales += self.copies
        # Update the `sold_on_credit` status of the book
        self.book.sold_on_credit = self.sold_on_credit
        self.book.in_cart = self.in_cart
        self.book.save()
        super(Order, self).save(*args, **kwargs)

    def __str__(self):
        return f"Order for {self.book.title}, sold on credit: {self.sold_on_credit}"
    
