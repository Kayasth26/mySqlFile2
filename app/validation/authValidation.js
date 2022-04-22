const Joi = require('@hapi/joi');

function registerValidate(req) {
    const schema = Joi.object({
        name: Joi.string().required().empty().messages({
            "string.base": `first name should be a type of 'text'`,
            "string.empty": `first name cannot be an empty field`,
            "any.required": `first name is a required field`,
        }),
        lname: Joi.string().required().empty().messages({
            "string.base": `first name should be a type of 'text'`,
            "string.empty": `first name cannot be an empty field`,
            "any.required": `first name is a required field`,
        }),
        mobile: Joi.number().required().min(10).empty().messages({
            "number.base": `phone number should be a type of 'number'`,
            "number.empty": `phone number cannot be an empty field`,
            "number.min": "phone number should be of minimum 10 digits",
            "any.required": `phone number is a required field`,
        }),
        email: Joi.string().required().empty().email().messages({
            "string.base": `Email should be a type of 'text'`,
            "string.empty": `Email cannot be an empty field`,
            "string.email": `Email format not valid`,
            "any.required": `Email is a required field`,
        }),
        address: Joi.string().required().empty().address().messages({
            "string.base": `address should be a type of 'text'`,
            "string.empty": `address cannot be an empty field`,
            "string.address": `address format not valid`,
            "any.required": `address is a required field`,
        }),
        gender: Joi.string().required().empty().messages({
            "string.base": `gender should be selected`,
            "string.empty": `gender cannot be an empty field`,
            "any.required": `gender is a required field`,
        }),
        hobby: Joi.required().empty().messages({
            "string.empty": `hobbies cannot be an empty field`,
            "any.required": `hobbies is a required field`,
        }),
        password: Joi.string().required().empty().min(6).messages({
            "string.base": `password should be a type of 'text'`,
            "string.empty": `password cannot be an empty field`,
            "string.min": "password should be of minimum 6 characters",
            "any.required": `password is a required field`,
        }),
    });
    return schema.validate(req);
}

function loginValidate(req) {
    const schema = Joi.object({
        email: Joi.string().required().empty().email().messages({
            "string.base": `Email should be a type of 'text'`,
            "string.empty": `Email cannot be an empty field`,
            "string.email": `Email format not valid`,
            "any.required": `Email is a required field`,
    }),
        password: Joi.string().required().empty().min(6).max(16).messages({
            "string.base": `password should be a type of 'text'`,
            "string.empty": `password cannot be an empty field`,
            "string.min": "password should be of minimum 6 character",
            "string.max": "password should be of maximum 16 character",
            "any.required": `password is a required field`
        })
    });
    return schema.validate(req);
}

function viewProfileValidate(req) {
    const schema = Joi.object({
        name: Joi.string().required().empty().messages({
            "string.base": `first name should be a type of 'text'`,
            "string.empty": `first name cannot be an empty field`,
            "any.required": `first name is a required field`,
        }),
        lname: Joi.string().required().empty().messages({
            "string.base": `first name should be a type of 'text'`,
            "string.empty": `first name cannot be an empty field`,
            "any.required": `first name is a required field`,
        }),
        mobile: Joi.number().required().min(10).empty().messages({
            "number.base": `phone number should be a type of 'number'`,
            "number.empty": `phone number cannot be an empty field`,
            "number.min": "phone number should be of minimum 10 digits",
            "any.required": `phone number is a required field`,
        }),
        email: Joi.string().required().empty().email().messages({
            "string.base": `Email should be a type of 'text'`,
            "string.empty": `Email cannot be an empty field`,
            "string.email": `Email format not valid`,
            "any.required": `Email is a required field`,
        }),
        address: Joi.string().required().empty().address().messages({
            "string.base": `address should be a type of 'text'`,
            "string.empty": `address cannot be an empty field`,
            "string.address": `address format not valid`,
            "any.required": `address is a required field`,
        }),
        gender: Joi.string().required().empty().messages({
            "string.base": `gender should be selected`,
            "string.empty": `gender cannot be an empty field`,
            "any.required": `gender is a required field`,
        }),
        hobby: Joi.required().empty().messages({
            "string.empty": `hobbies cannot be an empty field`,
            "any.required": `hobbies is a required field`,
        }),
        password: Joi.string().required().empty().min(6).messages({
            "string.base": `password should be a type of 'text'`,
            "string.empty": `password cannot be an empty field`,
            "string.min": "password should be of minimum 6 characters",
            "any.required": `password is a required field`,
        }),
    });
    return schema.validate(req);
}

function updateProfileValidate(req) {
    const schema = Joi.object({
        name: Joi.string().required().empty().messages({
            "string.base": `name should be a type of 'text'`,
            "string.empty": `name cannot be an empty field`,
            "any.required": `name is a required field`,
        }),
        sname: Joi.string().required().empty().messages({
            "string.base": `sname should be a type of 'text'`,
            "string.empty": `sname cannot be an empty field`,
            "any.required": `sname is a required field`,
        }),
        mobile: Joi.number().required().min(10).empty().messages({
            "number.base": `mobile should be a type of 'number'`,
            "number.empty": `mobile cannot be an empty field`,
            "number.min": "mobile should be of minimum 10 digits",
            "any.required": `mobile is a required field`,
        }),
        email: Joi.string().required().empty().email().messages({
            "string.base": `email should be a type of 'text'`,
            "string.empty": `email cannot be an empty field`,
            "string.email": `email format not valid`,
            "any.required": `email is a required field`,
        }),
        address: Joi.string().required().empty().messages({
            "string.base": `address should be a type of 'text'`,
            "string.empty": `address cannot be an empty field`,
            "string.address": `address format not valid`,
            "any.required": `address is a required field`,
        }),
        gender: Joi.string().required().empty().messages({
            "string.base": `gender should be selected`,
            "string.empty": `gender cannot be an empty field`,
            "any.required": `gender is a required field`,
        }),
        hobby: Joi.required().empty().messages({
            "string.empty": `hobbies cannot be an empty field`,
            "any.required": `hobbies is a required field`,
        }),
    });
    return schema.validate(req);
}

function addressvalidate(req) {
    const schema = Joi.object({
        addressline1: Joi.string().required().empty().messages({
            "string.base": `addressline1 should be a type of 'text'`,
            "string.empty": `addressline1 cannot be an empty field`,
            "any.required": `addressline1 is a required field`,
        }),
        addressline2: Joi.string().required().empty().messages({
            "string.base": `addressline2 should be a type of 'text'`,
            "string.empty": `addressline2 cannot be an empty field`,
            "any.required": `addressline2 is a required field`,
        }),
        country: Joi.string().required().empty().messages({
            "string.base": `country should be a type of 'text'`,
            "string.empty": `country name cannot be an empty field`,
            "any.required": `country name is a required field`,
        }),
        state: Joi.string().required().empty().messages({
            "string.base": `state should be a type of 'text'`,
            "string.empty": `state cannot be an empty field`,
            "any.required": `state is a required field`,
        }),
        city: Joi.string().required().empty().messages({
            "string.base": `city should be a type of 'text'`,
            "string.empty": `city  cannot be an empty field`,
            "any.required": `city is a required field`,
        }),
        pincode: Joi.number().required().min(10).empty().messages({
            "number.base": `pincode should be a type of 'number'`,
            "number.empty": `pincode cannot be an empty field`,
            "number.min": "pincode should be of minimum 10 digits",
            "any.required": `pincode is a required field`,
        }),
    });
    return schema.validate(req);
}
module.exports = {
    registerValidate,loginValidate,viewProfileValidate,updateProfileValidate,addressvalidate
};