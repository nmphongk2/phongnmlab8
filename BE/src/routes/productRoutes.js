const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD routes
router.post('/product', productController.createSP);
router.get('/product', productController.getAllSP);
router.get('/posts/:id', productController.getPostById);
router.put('/product/:id', productController.updateSP);
router.delete('/product/:id', productController.deleteSP);

module.exports = router;
