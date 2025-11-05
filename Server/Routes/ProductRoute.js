const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/ProductController');

router.get('/', ProductController.GetAllProducts);

router.get('/product/:id', ProductController.GetProductById);

router.post('/product', ProductController.CreateProduct);

router.put('/product/:id', ProductController.UpdateProduct);

router.delete('/product/:id', ProductController.DeleteProduct);


module.exports = router;