from django.urls import path
from .views import UserList, UserRetrieveUpdateDestroy

urlpatterns = [
    path('', UserList.as_view(), name='user-list'),
    path('<int:pk>/', UserRetrieveUpdateDestroy.as_view(), name='user-detail')
]