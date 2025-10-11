# Imagen base
FROM python:3.13-slim

# Variables de entorno
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# Copiar y instalar dependencias Python
COPY requirements.txt .
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Copiar el código de la app
COPY . .

# Exponer puerto Django
EXPOSE 8000

# Comando por defecto para desarrollo
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
