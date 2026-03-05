from django.urls import path
from . import views

urlpatterns = [
    path('', views.ReviewListCreate.as_view(), name='review-list-create'),
    path('<int:pk>/', views.ReviewRetrieveUpdateDestroy.as_view(), name='review-retrieve-update-destroy'),
]