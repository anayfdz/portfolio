'use strict';

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
  async findOneBySlug(ctx) {
    // Si no se pasa un slug, devuelve todos los posts
    if (ctx.params.slug) {
      const { slug } = ctx.params;
      
      try {
        const post = await strapi.entityService.findMany('api::post.post', {
          filters: { slug }, // Filtramos por slug
          populate: ['tags'], // Poblamos las relaciones necesarias
        });

        if (!post || post.length === 0) {
          return ctx.notFound('Post not found');
        }

        ctx.body = post[0]; // Retornamos solo el primer post encontrado
      } catch (err) {
        ctx.badRequest('Error fetching post by slug');
      }
    } else {
      // Si no se pasa un slug, se obtienen todos los posts
      try {
        const posts = await strapi.entityService.findMany('api::post.post', {
          populate: ['tags'], // Poblamos las relaciones necesarias
        });

        if (!posts || posts.length === 0) {
          return ctx.notFound('No posts found');
        }

        ctx.body = posts; // Retornamos todos los posts encontrados
      } catch (err) {
        ctx.badRequest('Error fetching all posts');
      }
    }
  },
}));
