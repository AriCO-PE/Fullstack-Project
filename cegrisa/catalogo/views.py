from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Producto
from .serializers import ProductoSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend]
    search_fields = ['nombre', 'descripcion', 'marca__nombre', 'color__nombre', 'categoria__nombre']
    ordering_fields = ['precio', 'nombre']
    filterset_fields = ['categoria', 'marca', 'color']  # Esto permite filtrar con query params


