const { json } = require('body-parser');
const joi = require('joi');

const singupValidation = async(req, res, next) => {
    const Schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required(),
    });
    const {error}= Schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message: "Bad request", error})
    }
    next();
}
const loginValidation = async(req, res, next) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required(),
    });
    const {error}= Schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message: "Bad request", error})
    }
    next();
}
module.exports = {
    singupValidation,
    loginValidation
}