const express = require('express');
const router = express.Router();
const purchaceController = require('../controllers/purchaceController');
router.post('/', purchaceController.buyproccess); 
router.get('/:customer',purchaceController.gethistorybyuser);

module.exports = router;