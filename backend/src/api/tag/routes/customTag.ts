export default {
    routes: [
      {
        method: 'GET',
        path: '/tags/:tag/posts',
        handler: 'tag.findPostsByTag',
        config: {
          policies: [],
          middlewares: [], // Políticas opcionales
        },
      },
    ],
  };
  