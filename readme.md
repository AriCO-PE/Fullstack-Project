# CegrisaVPS - Full Stack Application 🚀

[![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Django REST](https://img.shields.io/badge/DRF-ff1709?style=for-the-badge&logo=django&logoColor=white)](https://www.django-rest-framework.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org)

A full-stack web application with a **Django REST Framework** backend and **React** frontend, containerized with Docker.

## 🎯 Backend Features (Python/Django)

### API Endpoints
- `GET/POST /api/products/` - List and create products
- `GET/PUT/DELETE /api/products/{id}/` - Product detail operations  
- `GET /api/users/` - User management
- **JWT Authentication** - Secure API access
- **Admin Panel** - Full data management at `/admin`

### Database Models
```python
class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    # ... more fields
