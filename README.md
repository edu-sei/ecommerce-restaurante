# 🍽️ Sabores Urbanos - eCommerce Restaurante

Sistema completo de eCommerce para restaurante con React frontend y Node.js backend.

## 📋 Descripción

**Sabores Urbanos** es una aplicación web completa para restaurantes que permite:
- Navegación de menú con categorías
- Carrito de compras interactivo
- Sistema de usuarios y autenticación
- Gestión de productos y categorías
- Interfaz moderna y responsive

## 🚀 Características

### Frontend (React)
- ✅ Landing page profesional
- ✅ Catálogo de productos con filtros
- ✅ Modal de detalles de productos
- ✅ Carrito lateral deslizante
- ✅ Diseño responsive
- ✅ Navegación intuitiva

### Backend (Node.js)
- ✅ API REST completa
- ✅ Autenticación JWT
- ✅ Base de datos MySQL
- ✅ Stored procedures
- ✅ Documentación Swagger
- ✅ Middleware de seguridad

## 🛠️ Tecnologías

### Frontend
- **React** 18+
- **React Router** - Navegación
- **Lucide React** - Iconos
- **CSS Modules** - Estilos
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express.js** - Framework web
- **MySQL** - Base de datos
- **JWT** - Autenticación
- **Swagger** - Documentación API
- **CORS** - Cross-origin requests

## 📁 Estructura del Proyecto

```
ecommerce-restaurante/
├── Client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Product/
│   │   │   ├── ProductModal/
│   │   │   └── FilterBar/
│   │   ├── pages/          # Páginas principales
│   │   │   ├── Home/
│   │   │   ├── Menu/
│   │   │   ├── Cart/
│   │   │   └── Checkout/
│   │   ├── Context/        # Context API
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   └── api/            # Configuración API
│   └── public/
├── Server/                 # Backend Node.js
│   ├── Controllers/        # Lógica de negocio
│   ├── Models/            # Modelos de datos
│   ├── Routes/            # Rutas API
│   ├── Middleware/        # Middlewares
│   ├── config/            # Configuración DB y Swagger
│   │   ├── db.js
│   │   └── swagger.js    
│   ├── app.js
│   └── server.js
└── README.md
```

## ⚙️ Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd ecommerce-restaurante
```

### 2. Configurar Backend
```bash
cd Server
npm install
```

Crear archivo `.env`:
```env
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=sabores_urbanos
JWT_SECRET=tu_jwt_secret
URL_FRONT=http://localhost:5173
```

### 3. Configurar Base de Datos
```sql
-- Crear base de datos
CREATE DATABASE sabores_urbanos;

### 4. Configurar Frontend
```bash
cd Client
npm install
```

## 🚀 Ejecución

### Backend
```bash
cd Server
npm start
# Servidor en http://localhost:3000
# API Docs en http://localhost:3000/api-docs
```

### Frontend
```bash
cd Client
npm run dev
# Aplicación en http://localhost:5173
```

## 📚 API Endpoints

### Productos
- `GET /api/Products` - Obtener todos los productos
- `GET /api/Products/product/:id` - Obtener producto por ID
- `POST /api/Products/product` - Crear producto
- `PUT /api/Products/product/:id` - Actualizar producto
- `DELETE /api/Products/product/:id` - Eliminar producto

### Categorías
- `GET /api/Category` - Obtener todas las categorías
- `GET /api/Category/category/:id` - Obtener categoría por ID
- `POST /api/Category/category` - Crear categoría
- `PUT /api/Category/category/:id` - Actualizar categoría
- `DELETE /api/Category/category/:id` - Eliminar categoría

### Usuarios
- `POST /api/Users/login` - Iniciar sesión
- `POST /api/Users/user` - Registrar usuario
- `GET /api/Users` - Obtener usuarios (requiere auth)
- `GET /api/Users/user/:id` - Obtener usuario por ID
- `PUT /api/Users/user/:id` - Actualizar usuario
- `DELETE /api/Users/user/:id` - Eliminar usuario

## 📖 Documentación API

La documentación completa de la API está disponible en Swagger:
```
http://localhost:3000/api-docs
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: #e85a00 (Naranja)
- **Secundario**: #2c1810 (Marrón oscuro)
- **Fondo**: #fafafa (Gris claro)
- **Gradientes**: Tonos cálidos

### Componentes UI
- **Cards** con hover effects
- **Modal** con animaciones
- **Carrito** lateral deslizante
- **Filtros** interactivos
- **Navegación** responsive

## 🔧 Funcionalidades Principales

### Carrito de Compras
- Agregar/quitar productos
- Controles de cantidad
- Límite por persona (4 items)
- Persistencia en contexto
- Resumen de precios

### Sistema de Filtros
- Filtrar por categoría
- Navegación por URL
- Estados activos
- Responsive design

### Autenticación
- Login/registro
- JWT tokens
- Middleware de protección
- Context de usuario

## 🚀 Despliegue

### Variables de Entorno Producción
```env
# Backend
NODE_ENV=production
DB_HOST=tu_host_produccion
JWT_SECRET=secret_seguro_produccion
URL_FRONT=https://tu-dominio.com

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Autores

- **Desarrollador Principal** - [Edu-sei][Joaquin-dv]

## 📞 Contacto

- **Proyecto**: [https://github.com/edu-sei/ecommerce-restaurante]

---

⭐ **¡Dale una estrella al proyecto si te gustó!**