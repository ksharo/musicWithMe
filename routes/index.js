const trebleRoutes = require('./trebleApi');
const bassRoutes = require('./bassApi');

const constructorMethod = (app) => {
  app.use('/treble', trebleRoutes);
  app.use('/bass', bassRoutes);
  app.use('*', (_, res) => {
    return res.render('individualPages/error', {error: {message: "Page not found.", status: 404}});
  });
};

module.exports = constructorMethod;