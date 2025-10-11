from django.db import models

# --- CATEGORÍAS PRINCIPALES ---
class Categoria(models.Model):
    nombre = models.CharField(max_length=100, unique=True)

    class Meta:
        verbose_name_plural = "Categorías"

    def __str__(self):
        return self.nombre


# --- MARCAS ---
class Marca(models.Model):
    nombre = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.nombre


# --- COLORES ---
class Color(models.Model):
    nombre = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.nombre


# --- PRODUCTO ---
class Producto(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    imagen = models.ImageField(upload_to="productos/", blank=True, null=True)

    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_name="productos")
    marca = models.ForeignKey(Marca, on_delete=models.SET_NULL, null=True, blank=True, related_name="productos")
    color = models.ForeignKey(Color, on_delete=models.SET_NULL, null=True, blank=True, related_name="productos")

    # Campos opcionales según tipo
    dimensiones = models.CharField(max_length=100, blank=True)
    acabado = models.CharField(max_length=100, blank=True)
    tipo_instalacion = models.CharField(max_length=100, blank=True)
    tipo_descarga = models.CharField(max_length=100, blank=True)
    forma = models.CharField(max_length=100, blank=True)

    fecha_creacion = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-fecha_creacion']

    def __str__(self):
        return self.nombre
