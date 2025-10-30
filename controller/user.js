const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const asyncHandler = require('express-async-handler');

const userCtrl = {
    //!Register
    registerUser: asyncHandler(async (req, res) => {
        res.json({ message: 'Register User' });
    })

    //!Login

    //!Profile
};

module.exports = userCtrl;