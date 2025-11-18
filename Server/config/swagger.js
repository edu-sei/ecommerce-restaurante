const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sabores Urbanos API',
      version: '1.0.0',
      description: 'API para el sistema de restaurante eCommerce',
      contact: {
        name: 'Sabores Urbanos',
        email: 'ejemplo@real.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo'
      }
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Empanadas Salteñas' },
            description: { type: 'string', example: 'Empanadas tradicionales con carne' },
            price: { type: 'string', example: '12000.00' },
            img: { type: 'string', example: 'https://example.com/empanadas.jpg' },
            category_id: { type: 'integer', example: 1 },
            category_name: { type: 'string', example: 'Entradas' }
          }
        },
        Category: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Entradas' },
            description: { type: 'string', example: 'Platos de entrada' },
            img: { type: 'string', example: '🥗' }
          }
        },
        User: {
          type: 'object',
          properties: {
            id_user: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Juan' },
            lastname: { type: 'string', example: 'Pérez' },
            email: { type: 'string', example: 'juan@email.com' },
            password: { type: 'string', example: 'hashedpassword' }
          }
        }
      }
    }
  },
  apis: ['./Routes/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };