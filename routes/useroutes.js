const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.post('/',userController.createuser);
router.get('/',userController.getusers);
router.get('/:id', userController.getuser);
router.put('/:id', userController.updateuser);
router.delete('/:id', userController.deleteuser);

module.exports = router;