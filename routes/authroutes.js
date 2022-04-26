const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
router.post('/login',authController.login);
router.post('/register',authController.createUser);
router.get('/users', authController.getUser);
module.exports = router;