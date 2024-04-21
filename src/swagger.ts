import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de mi aplicación',
      version: '1.0.0',
      description: 'Descripción de mi API',
    },
  },
  apis: ['./routes/*.ts'], // Rutas donde se encuentran los comentarios de Swagger
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app: Express): void {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}