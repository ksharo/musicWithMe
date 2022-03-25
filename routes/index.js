const apiRoutes = require('./routeApi');

const constructorMethod = (app) => {
  app.use('/', apiRoutes);
  app.use('*', (_, res) => {
    return res.render('individualPages/error', {error: {message: "Page not found.", status: 404}});
  });
};

module.exports = constructorMethod;