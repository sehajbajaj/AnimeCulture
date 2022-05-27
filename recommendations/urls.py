from django.urls import path
from . import views

urlpatterns = [
    path('overview/', views.apiOverview, name='overview'),
    path('anime/<int:id>/recommend/', views.recommendAnimes, name='recommend'),

]
