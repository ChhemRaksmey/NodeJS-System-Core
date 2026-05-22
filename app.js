const express        = require('express');
const path           = require('path');
const expressLayouts = require('express-ejs-layouts');
const initI18n       = require('./middleware/i18n');
const initNavigation = require('./middleware/navigation');

const routersWeb = require('./routes/web');
const routersApi = require('./routes/api');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.set('layout', 'layout');

app.use(express.static(path.join(__dirname, 'public')));

initI18n(app);
initNavigation(app);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use('/', routersWeb);
app.use('/api', routersApi);



const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});

module.exports = app;
