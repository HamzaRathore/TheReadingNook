const Joi = require('joi')

const jwt = ("jsonwebtoken");
const User = ("../models/User.js");
const dotenv = ("dotenv");

const signupValidation=(req,res,next)=>{
    const schema=Joi.object({
        name:Joi.string().required().min(3),
        email:Joi.string().required().email(),
        password:Joi.string().required().min(4).max(25),
    })
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next();
}

const loginValidation=(req,res,next)=>{
    const schema=Joi.object({
        email:Joi.string().required().email(),
        password:Joi.string().required().min(4).max(25),
    })
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next();
}

module.exports={signupValidation,loginValidation}