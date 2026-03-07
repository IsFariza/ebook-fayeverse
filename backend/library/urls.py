from django.urls import path
from .views import LibraryListCreate, LibraryRetrieveUpdateDestroy

urlpatterns = [
    path('', LibraryListCreate.as_view(), name='library-list-create'),
    path('<int:pk>/', LibraryRetrieveUpdateDestroy.as_view(), name='library-detail')
]