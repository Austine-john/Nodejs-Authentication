const express = require('express');

const router = express.Router();
//!register
router.post('api/users/register', userCtrl.registerUser);

//!login
router.post('api/users/login', userCtrl.loginUser);

//!profile
router.get('api/users/profile', userCtrl.getUserProfile);

module.exports = router;