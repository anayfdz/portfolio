'use strict';

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::tag.tag', ({ strapi }) => ({
  async findPostsByTag(ctx) {
    const { tag } = ctx.params; // Captura el nombre de la etiqueta desde la URL
    
    try {
      const tagData = await strapi.db.query('api::tag.tag').findOne({
        where: { name: tag },
        populate: ['posts'], // Asegúrate de poblar la relación con los posts
      });

      if (!tagData || !tagData.posts || tagData.posts.length === 0) {
        return ctx.notFound('No posts found for this tag');
      }

      ctx.body = tagData.posts; // Retorna solo los posts
    } catch (error) {
      ctx.badRequest('Error fetching posts for the tag');
    }
  },
}));
