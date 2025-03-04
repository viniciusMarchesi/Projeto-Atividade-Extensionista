from django.urls import path
from .views import home
#from . import views

urlpatterns = [
    path('', home, name='home'),
]

'''urlpatterns = [
    path('', views.index, name='index'),  # Página inicial
]'''