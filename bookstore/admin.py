from django.contrib import admin
from .models import Author, Category, Book

#Register your models here.
@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name', 'birth_date')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Book)
class BooksAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category', 'year_of_publishing', 'price', 'sold_on_credit')
    list_filter = ('author', 'category', 'sold_on_credit')
    search_fields = ('title', 'author__name')

