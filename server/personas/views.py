from rest_framework import viewsets
from .serializer import PersonSerializer
from .models import Person
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser

# Create your views here.
class PersonView(viewsets.ModelViewSet):
    serializer_class = PersonSerializer
    queryset = Person.objects.all()
    parser_classes = (MultiPartParser,)
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Procesar el formulario aquí si es válido
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)