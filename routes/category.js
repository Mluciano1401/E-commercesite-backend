const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
router.post('/',categoryController.createcategory);
router.get('/',categoryController.getcategorys);
router.get('/:id', categoryController.getcategory);
router.put('/:id', categoryController.updatecategory);
router.delete('/:id', categoryController.deletecategory);

module.exports = router;