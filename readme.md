# Cegrisavps – Backend y Frontend con Docker 🐳

Este proyecto incluye un **backend en Django** y un **frontend en React con Vite**, listos para ejecutarse mediante **Docker**. No necesitas instalar Python, Node.js ni PostgreSQL en tu máquina: todo corre dentro de contenedores.

---

## 🚀 Requisitos

* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)

---

## 📁 Estructura del proyecto

```
cegrisavps/
├─ cegrisa/                # Backend Django
├─ cegrisa_frontend/       # Frontend React con Vite
├─ docker-compose.yml      # Configuración de Docker
└─ README.md
```

---

## 🛠️ Levantar el proyecto

Desde la raíz del proyecto, ejecuta:

```bash
docker-compose up --build
```

Esto hará lo siguiente:

* Construirá los contenedores del backend, frontend y base de datos PostgreSQL.
* Levantará los servicios en:

  * Backend Django: [http://localhost:8000](http://localhost:8000)
  * Frontend React (Vite): [http://localhost:3000](http://localhost:3000)
* Los contenedores se comunican automáticamente mediante la red interna de Docker.

---

### 🔐 Crear superusuario en Django

Para acceder al panel de administración:

```bash
docker-compose exec backend bash
python manage.py createsuperuser
```

Sigue las instrucciones para crear el usuario.

---

### 🧬 Migraciones de la base de datos

Si agregas nuevas migraciones o modificas modelos:

```bash
docker-compose exec backend bash
python manage.py makemigrations
python manage.py migrate
```

---

### 🧹 Limpieza de contenedores y volúmenes

Para detener los contenedores:

```bash
docker-compose down
```

Para reiniciar la base de datos desde cero:

```bash
docker volume rm cegrisavps_postgres_data
docker volume rm cegrisavps_media_data
```

> Los datos persistentes se almacenan en los volúmenes `postgres_data` y `media_data`.

---

### 🔄 Desarrollo en tiempo real

Los cambios en el backend o frontend se reflejan automáticamente gracias a los volúmenes montados:

* **Frontend**

  * Contenedor: puerto 5173
  * Host: puerto 3000
* **Backend**

  * Puerto accesible: 8000

---

### ⚙️ Variables de entorno

* **Backend:** archivo `.env` en `cegrisa/.env`
* **Frontend:** puedes configurar variables como:

```yaml
REACT_APP_API_URL=http://backend:8000
```

...directamente en el `docker-compose.yml`.

---

### 📡 Acceso a la API

Endpoint principal de productos: [http://localhost:8000/api/productos/](http://localhost:8000/api/productos/)

---

### 📝 Notas finales

* Este proyecto está preparado para desarrollo local.
* No uses el servidor de desarrollo de Django en producción.
* Para producción, utiliza WSGI/ASGI con servidores como Gunicorn o Uvicorn.
* El proyecto es completamente portátil: cualquier persona con Docker puede levantarlo sin instalar dependencias adicionales.
