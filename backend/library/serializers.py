from rest_framework import serializers
from .models import Library
from book.serializers import BookSerializer

class LibrarySerializer(serializers.ModelSerializer):
    books = BookSerializer(many=True, read_only=True)

    book_count = serializers.IntegerField(read_only=True)
    is_owner = serializers.SerializerMethodField()



    class Meta:
        model = Library
        fields = ['id', 'name', 'is_public', 'books', 'book_count', 'is_owner', 'created_at']

    def get_is_owner(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return obj.user == request.user
        return False 