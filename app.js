/*
 * Authors: Caleb Choy, Logan Rechler, Jack Schneiderhan, Kaitlyn Sharo
 */

const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');

const configRoutes = require('./routes');
const exphbs = require('express-handlebars');

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const session = require('express-session')
app.use(
    session({
        name: 'AuthCookie',
        secret: "some secret string!",
        saveUninitialized: true,
        resave: false,
    })
);

/* make sure user is logged in */

app.use('/', (req, res, next) => {
    req.session.user = {
        _id: '624fa1a602009b3fece0e4ee', // user id
        coins: 50, // number of coins the user has
        username: 'ksharo',
        purchased: ["624fa1a602009b3fece0e4f2",
            "624fa1a602009b3fece0e4f3",
            "624fa1a602009b3fece0e4f4",
            "624fa1a602009b3fece0e4f5",
            "624fa1a602009b3fece0e4f6",
            "624fa1a602009b3fece0e4f7"
        ]
    }
    next();
})

// app.use('/', (req, res, next) => {
//     console.log(req.originalUrl);
//     if (req.originalUrl != '/account' && req.originalUrl != '/' &&
//         req.originalUrl != '/treble') {
//         // && 
//         // (!req.originalUrl.includes('/treble') && Number(req.originalUrl.substring(req.originalUrl.length - 1)) < 3)) {
//         if (!req.session.user) {
//             return res.status(403).redirect('/account');
//         } else {
//             next();
//         }
//     } else if (req.originalUrl == '/') {
//         if (req.session.user) {
//             return res.redirect('/lessons');
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });

configRoutes(app);

app.listen(3030, () => {
    console.log('The server is running on http://localhost:3030');
});