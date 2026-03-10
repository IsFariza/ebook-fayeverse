from rest_framework import generics, permissions, filters
from .models import Book
from users.models import User
from .serializers import BookSerializer
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Avg
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated


class BookListCreate(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = []

    queryset = Book.objects.annotate(average_rating=Avg('review__rating')).all()
    serializer_class = BookSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['genre', 'author']
    search_fields = ['title']
    ordering_fields = ['created_at', 'pages', 'average_rating']

    def get_queryset(self):
        return Book.objects.annotate(average_rating=Avg('review__rating')).all()
    
class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author == request.user

class BookRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.annotate(average_rating=Avg('review__rating')).all()
    serializer_class = BookSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly]