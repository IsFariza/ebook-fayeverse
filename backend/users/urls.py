from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import RegisterView, UserList, UserRetrieveUpdateDestroy

urlpatterns = [
    path('', UserList.as_view(), name='user-list'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', RegisterView.as_view(), name='user-register'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('<int:pk>/', UserRetrieveUpdateDestroy.as_view(), name='user-detail')
]