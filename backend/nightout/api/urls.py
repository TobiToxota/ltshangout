from django.urls import path
from . import views

urlpatterns = [
    path('nightoutlist/', views.NightOutList.as_view()),
    path('nightout/<int:pk>/', views.NightOut.as_view()),
]
