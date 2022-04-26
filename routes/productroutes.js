const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
router.post('/',productController.createProduct);
router.get('/',productController.getProducts);
router.get('/:id', productController.getProduct);
router.get('/supplier/:supplier', productController.getsproductsbysupplier);
router.get('/category/:category', productController.getsproductsbycategory);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;