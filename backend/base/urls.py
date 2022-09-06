# this file is in charge of connecting the views to your URLs
from django.urls import URLPattern, path
from . import views


# ! we actually don't need this anymore as we will inheirt this from view.py
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
# )


urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

    path('users/register/', views.registerUser, name='register'),

    path('users/profile/',views.getUserProfile, name = 'users-profile'),
    path('users/',views.getUsers, name = 'users'),

    path('products/',views.getProducts, name = 'products'),
    path('products/<str:pk>/',views.getProduct, name = 'product'),

    # path('',views.getRoutes, name = 'routes'),

]