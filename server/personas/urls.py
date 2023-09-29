from django.urls import path, include
from rest_framework import routers
from .views import PersonView


router = routers.DefaultRouter()
router.register(r'personas', PersonView,basename='personas')

urlpatterns = [    
    path('v1/', include(router.urls)),
]

