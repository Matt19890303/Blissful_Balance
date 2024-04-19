from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('home/', views.home, name='home'),
    path('anxiety/', views.anxiety, name='anxiety'),
    path('ocd/', views.ocd, name='ocd'),
    path('dpdr/', views.dpdr, name='dpdr'),
    path('support_us/', views.support_us, name='support_us'),
    path('articles/', views.articles, name='articles'),
    # path('signup/', views.signup_view, name='signup'),
    # path('login/', views.login_view, name='login'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login_view, name='login')
]