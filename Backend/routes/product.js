const express = require('express');
const router = express.Router();
const product = require('../controller/product')


router 
    .post('/', product.createProduct)
    .get('/', product.getAll)
    .get('/:id', product.getProduct)
    .put('/:id', product.replaceProduct)
    .patch('/:id', product.updateProduct)
    .delete('/:id', product.deleteProduct)

exports.routes = router;

