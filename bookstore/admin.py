from django.contrib import admin
from .models import Author, Category, Book, Order

#Register your models here.
@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name', 'birth_date')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Book)
class BooksAdmin(admin.ModelAdmin):
    list_display = ('title', 'author','publisher', 'category','description', 'language', 'year_of_publishing', 'price', 'likes', 'sold_on_credit', 'isbn', 'img_url', 'in_cart')
    list_filter = ('author', 'category', 'sold_on_credit')
    search_fields = ('title', 'author__name')
    
    def author_name(self, obj):
        return obj.author.name if obj.author else None

    author_name.short_description = 'Author'

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('book',)