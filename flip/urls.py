from django.urls import path
from . import views


urlpatterns = [
    path('api/skill/', views.SkillListCreate.as_view()),
    path('api/skill/compare/', views.compare, name='compare'),
]