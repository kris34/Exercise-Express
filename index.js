const express = require('express');
const hbs = require('express-handlebars').create({
  extname: '.hbs',
});

const app = express();
const port = 5555;

const homeController = require('./controllers/home');
const catalogController = require('./controllers/catalog');
const createController = require('./controllers/create');

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use(express.urlencoded({ extended: true }));


app.use(homeController);
app.use('/catalog/', catalogController);
app.use('/create', createController);

app.listen(port, () => console.log(`Listening on port ${port}`));
