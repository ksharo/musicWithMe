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

configRoutes(app);

app.listen(3030, () => {
    console.log('The server is running on http://localhost:3030');
});