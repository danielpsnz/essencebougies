const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    updateProductStock,
} = require('../controllers/productController');

// Rutas para obtener todos los productos y un producto específico
router.get('/', getProducts);
router.get('/:id', getProductById);

// Rutas para crear, actualizar y eliminar productos
router.post('/add', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

// Ruta para buscar productos con parámetros de búsqueda
router.get('/search', searchProducts);

// Ruta para actualizar el stock de un producto
router.put('/:id/stock', updateProductStock);

module.exports = router;