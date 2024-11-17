const express = require('express');
const router = express.Router();
const sequelize = require('../config/dbConfig');
const productController = require('../controllers/productController');

// Define routes
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;