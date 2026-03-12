from django.urls import path
from .views import ReadingProgressListCreate, ReadingProgressDetail

urlpatterns = [
    path('', ReadingProgressListCreate.as_view(), name='progress-list'),
    path('<int:pk>/', ReadingProgressDetail.as_view(), name='progress-detail'),
]