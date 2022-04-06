const trebleRoutes = require('./trebleApi');
const bassRoutes = require('./bassApi');
const mainRoutes = require('./mainApi');
const lessonRoutes = require('./lessonsApi');
const accountRoutes = require('./accountApi');

const constructorMethod = (app) => {
  app.use('/', mainRoutes);
  app.use('/treble', trebleRoutes);
  app.use('/bass', bassRoutes);
  app.use('/lessons', lessonRoutes);
  app.use('/account', accountRoutes);
  app.use('*', (_, res) => {
    return res.render('individualPages/error', {error: {message: "Page not found.", status: 404}});
  });
};

module.exports = constructorMethod;