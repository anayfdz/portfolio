export default {
    routes: [
      {
        method: 'GET',
        path: '/authors/:id',
        handler: 'author.findOneById',
        config: {
          policies: [],
          middlewares: [], // Agrega políticas si es necesario
        },
      },
    ],
  };
  