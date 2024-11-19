'use strict';

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::author.author', ({ strapi }) => ({
  async findOneById(ctx) {
    const { id } = ctx.params;

    // Verificamos si el id es un número válido
    if (isNaN(id)) {
      return ctx.badRequest('Invalid author ID');
    }

    try {
      // Realizamos la consulta usando `findOne`
      const author = await strapi.db.query('api::author.author').findOne({
        where: { id: Number(id) },  // Pasamos el id como un número
        populate: ['posts'],  // Poblamos los posts relacionados
      });

      // Si no se encuentra el autor, retornamos un 404
      if (!author) {
        return ctx.notFound('Author not found');
      }

      // Si encontramos el autor, retornamos los datos
      ctx.body = author;
    } catch (err) {
      console.error('Error fetching author:', err);
      ctx.badRequest('Error fetching author');
    }
  },
}));
