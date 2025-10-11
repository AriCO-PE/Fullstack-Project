from rest_framework import serializers
from .models import Producto

class ProductoSerializer(serializers.ModelSerializer):
    categoria_nombre = serializers.StringRelatedField(source='categoria', read_only=True)
    marca_nombre = serializers.StringRelatedField(source='marca', read_only=True)
    color_nombre = serializers.StringRelatedField(source='color', read_only=True)

    class Meta:
        model = Producto
        fields = '__all__'
