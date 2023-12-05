Proyecto Coder House - Servidor E-commerce
¡Bienvenido al repositorio del servidor para gestionar productos y carritos de compra en nuestro e-commerce! Este proyecto, basado en Node.js y Express, utiliza una arquitectura moderna para proporcionar una experiencia eficiente y robusta.

Características Principales
Endpoints y Servicios:

Servidor Node.js con Express.
Escucha en el puerto 8080.
Rutas organizadas en /products y /carts con sus respectivos endpoints.
Gestión de Productos:

Rutas bajo /api/products para operaciones CRUD.
Implementación de WebSockets para interacción inmediata.
Handlebars y WebSocket:

Integración de Handlebars para plantillas.
Uso de Socket.io para renderización automática en la vista realTimeProducts.
Funcionalidades Adicionales
Autenticación y Perfil:

Implementación de login por formulario.
Registro, login, y logout con sesiones gestionadas por MongoConnect.
Perfil de usuario con sección de administrador para roles específicos.
Seguridad y Hashing:

Hashing de contraseñas con bcrypt.
Passport para autenticación y acceso mediante GitHub.
Arquitectura Mejorada:

Organización por capas bajo el patrón MVC.
Implementación de Factory para cambiar entre MongoDB y File.
Uso del patrón Repository en la lógica de negocio.
Compra y Tickets:

Modelo de orden para generar tickets.
Ruta /:cid/purchase para finalizar compras, actualizando stock y enviando emails de confirmación.
Logger y Mocking:

Sistema de logs con niveles y colores.
Ruta /api/loggerTest para probar logs.
Ruta /api/products/mockingproducts para generar productos con Faker.js.
Recuperación de Contraseña:

Sistema de recuperación de contraseña con enlace enviado por correo.
Roles y Permisos:

Nuevo rol "Premium" con permisos especiales.
Asignación de propietario a productos y restricciones de eliminación.
Limitaciones en el carrito para usuarios "Premium".
Documentación y Testing
Swagger y Testing:

Documentación con Swagger para módulos de productos y carritos.
Ruta /apidocs para acceder a la documentación.
Módulos de testing con Mocha, Chai y Supertest.
Multer y Archivos:

Propiedad last_connection para usuarios.
Multer para manejar documentos e imágenes en /users/:uid/documents.
Últimas Modificaciones y Enlaces
Mejoras Finales:

Información reducida en la ruta GET de usuarios.
Middleware para eliminar usuarios inactivos y su ejecución periódica.
Vistas y Administración:

Creación de vistas para administradores.
Notificación por correo electrónico al eliminar productos de usuarios "Premium".

¡Gracias por explorar nuestro proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarnos. ¡Disfruta de tu visita! 🚀





