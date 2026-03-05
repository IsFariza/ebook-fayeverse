from django.urls import path
from . import views

urlpatterns = [
    path('', views.GenreListCreateView.as_view(), name='genre-list-create'),
    path('<int:pk>/', views.GenreRetrieveUpdateDestroyView.as_view(), name='genre-retrieve-update-destroy'),
]