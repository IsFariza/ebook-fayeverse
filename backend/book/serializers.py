from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    genre_name = serializers.ReadOnlyField(source='genre.name')
    author_name = serializers.ReadOnlyField(source='author.username')
    author = serializers.ReadOnlyField(source='author.id')
    average_rating = serializers.FloatField(read_only=True)
    class Meta:
        model = Book
        fields = ['id', 'title', 'description', 'pages', 
                  'average_rating', 'genre', 'genre_name', 'author','author_name',
                    'created_at', 'cover_url']
       