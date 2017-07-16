var db = require('../db');
var router = require('express').Router();

module.exports = router;

router.get('/', function (req, res, next) {
    res.render('products', { products: db.getProducts() });
});

router.post('/', function (req, res, next) {
    db.createProduct(req.body);
    res.redirect('/products');
});

router.get('/:id', function (req, res, next) {
    res.render('product', { product: db.getProduct(+req.params.id) });
});

router.delete('/:id', function (req, res, next) {
    db.deleteProduct(+req.params.id);
    res.redirect('/products');
});