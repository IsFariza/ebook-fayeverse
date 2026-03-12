from rest_framework import generics, permissions
from .models import Library 
from .serializers import LibrarySerializer

class LibraryListCreate(generics.ListCreateAPIView):
    serializer_class = LibrarySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        target_user_id = self.request.query_params.get('user_id')

        if target_user_id:
            return Library.objects.filter(user_id=target_user_id, is_public=True)

        if user.is_authenticated:
            return Library.objects.filter(user=user)
        
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class LibraryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = LibrarySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Library.objects.filter(user=self.request.user)