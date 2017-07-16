var _currIndex = 3;
var _products = [
    {
        id: 1,
        name: 'foo',
        rating: 100
    },
    {
        id: 2,
        name: 'bar',
        rating: 20
    },
    {
        id: 3,
        name: 'buzz',
        rating: 200
    }
];

module.exports = {
    getProducts: function () {
        return _products;
    },
    getProduct: function (id) {
        return _products.filter(function (product) {
            return product.id === id;
        })[0];
    },
    getTopRated: function () {
        if (_products.length) {
            return _products.reduce(function (prev, curr) {
                if (curr.rating > prev.rating) {
                    return curr;
                }
                return prev;
            });
        }
    },
    createProduct: function (product) {
        if (!product.name) {
            throw 'product must have a name';
        }
        product.rating = +product.rating
        if (!product.rating) {
            throw 'rating must be a number';
        }
        product.id = ++_currIndex;
        _products.push(product);
    },
    deleteProduct: function (id) {
        _products = _products.filter(function (product) {
            return product.id !== id;
        });
    }
};