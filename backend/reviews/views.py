from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Review
from .serializers import ReviewSerializer
from ..readingProgress.models import ReadingProgress

# Create your views here.

class ReviewListCreate(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        book_id = self.request.query_params.get('book')
        if book_id:
            return Review.objects.filter(book_id=book_id)
        return Review.objects.all()
    
    def create(self, request, *args, **kwargs):
        user = request.user

        if not user.is_authenticated:
            return Response(
                {"detail": "Authentication credentials were not provided"},
                status=status.HTTP_401_UNAUTHORIZED
            )

        book_id = request.data.get('book')

        has_started = ReadingProgress.objects.filter(user=user, book_id=book_id).exists()
        if not has_started:
            return Response(
                {"detail": "You must read this book to leave a review"}, 
                status=status.HTTP_403_FORBIDDEN
            )
        return super().create(request, *args, **kwargs)
    
    def perfrom_create(self, serializer):
        serializer.save(user=self.request.user)

class ReviewRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer