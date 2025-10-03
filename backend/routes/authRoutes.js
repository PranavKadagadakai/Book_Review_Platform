const express = require('express');
const { signup, login, profile } = require('../controllers/authController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', auth, profile);

module.exports = router;