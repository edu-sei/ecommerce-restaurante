const express = require('express');
const router = express.Router();
const CategoryController = require('../Controllers/CategoryController');

router.get('/', CategoryController.GetAllCategories);

router.get('/category/:id', CategoryController.GetCategoryById);

router.post('/category', CategoryController.CreateCategory);

router.put('/category/:id', CategoryController.UpdateCategory);

router.delete('/category/:id', CategoryController.DeleteCategory);


module.exports = router;