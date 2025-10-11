from django.contrib import admin
from .models import Categoria, Marca, Color, Producto
from django.utils.html import format_html


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombre',)
    search_fields = ('nombre',)


@admin.register(Marca)
class MarcaAdmin(admin.ModelAdmin):
    list_display = ('nombre',)
    search_fields = ('nombre',)


@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    list_display = ('nombre',)
    search_fields = ('nombre',)


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'categoria', 'marca', 'color', 'precio', 'mostrar_imagen')
    list_filter = ('categoria', 'marca', 'color')
    search_fields = ('nombre', 'descripcion')
    list_editable = ('precio',)
    readonly_fields = ('mostrar_imagen',)
    ordering = ('-fecha_creacion',)

    fieldsets = (
        ('Información General', {
            'fields': ('nombre', 'descripcion', 'precio', 'imagen', 'mostrar_imagen')
        }),
        ('Clasificación', {
            'fields': ('categoria', 'marca', 'color')
        }),
        ('Detalles Técnicos', {
            'fields': ('dimensiones', 'acabado', 'tipo_instalacion', 'tipo_descarga', 'forma')
        }),
    )

    def mostrar_imagen(self, obj):
        if obj.imagen:
            return format_html('<img src="{}" width="70" height="70" style="object-fit:cover; border-radius:8px;" />', obj.imagen.url)
        return "Sin imagen"

    mostrar_imagen.short_description = "Vista previa"
