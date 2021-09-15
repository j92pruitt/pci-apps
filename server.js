const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars')
const path = require('path');

function init() {
    // Initialize express app and set port.
    const app = express();
    const PORT = process.env.PORT || 3001;

    // Set public folder for serving static files.
    app.use( express.static( path.join(__dirname, 'public/')));

    // Handlebars
    const hbs = exphbs.create();
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');

    app.use(routes);

    app.listen( PORT, () => console.log(`Listening on port ${PORT}`) );
}

init();