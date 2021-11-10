const session = require('express-session');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: new SequelizeStore({
      db: sequelize
    })
  }))
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);




sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});