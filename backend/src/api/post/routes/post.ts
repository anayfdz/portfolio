// src/api/post/routes/post.js

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::post.post', {
  config: {
    find: {
      policies: [], // Aquí se pueden agregar políticas globales para la ruta "find"
      middlewares: [], // Puedes agregar middlewares si es necesario
    },
    // También puedes configurar otros métodos como 'findOne', 'create', etc.
  }
});
