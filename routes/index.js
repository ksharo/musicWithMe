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
    app.use('*', (req, res) => {
        let user = null;
        if (req.session.user) {
            user = {
                username: req.session.user.username,
                coins: req.session.user.coins
            }
        }
        return res.render('individualPages/error', { error: { message: "Page not found.", status: 404 }, user: user });
    });
};

module.exports = constructorMethod;