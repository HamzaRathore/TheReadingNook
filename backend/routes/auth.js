const express = require('express');
const router=require('express').Router();
// const User = require('../models/User');
const  {handleSignup,handleLogin} = require('../controllers/authController');
const {signupValidation,loginValidation} = require('../middleware/auth');

router.post('/signup',signupValidation,handleSignup);
router.post('/login', loginValidation, handleLogin);

module.exports = router;