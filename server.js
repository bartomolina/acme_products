const express = require('express');
const path = require('path');
const swig = require('swig');
const db = require('./db.js');
swig.setDefaults({ cache: false });

const app = express();

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use(require('body-parser').urlencoded({ extended: false }))
app.use(require('method-override')('_method'));
app.use('/products', require('./routes/products'));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(function (err, req, res, next) {
    res.render('error', { error: err });
});

app.get('/', function (req, res, next) {
    res.render('index', { topRatedProduct: db.getTopRated() });
});

const port = process.env.PORT || 3000;
const server = app.listen(port);
