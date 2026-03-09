from django.urls import path 
from .views import BookListCreate, BookRetrieveUpdateDestroy

urlpatterns = [
    path('', BookListCreate.as_view(), name='book-list'),
    path('<int:pk>/', BookRetrieveUpdateDestroy.as_view(), name='book-detail')
]