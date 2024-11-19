export default {
    routes: [
      {
        method: 'GET',
        path: '/posts/:slug',
        handler: 'post.findOneBySlug',
        config: {
          policies: [], // Agrega políticas aquí si es necesario
          middlewares: [], // Agrega middlewares aquí si es necesario
        },
      }
    ],
  };
  