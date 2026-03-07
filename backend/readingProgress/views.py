from rest_framework import generics, permissions
from .models import ReadingProgress
from .serializers import ReadingProgressSerializer

class ReadingProgressListCreate(generics.ListCreateAPIView):
    serializer_class = ReadingProgressSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return ReadingProgress.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save()

class ReadingProgressDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ReadingProgressSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return ReadingProgress.objects.filter(user=self.request.user)