const Joi = require('@hapi/joi');

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

function updateaddressValidate(req){
    const schema = Joi.object({
        addressline1: Joi.string().required().empty().messages({
            "string.base": `addressline1 should be a type of 'text'`,
            "string.empty": `addressline1 cannot be an empty field`,
            "any.required": `addressline1 is a required field`,
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
        
    });
    return schema.validate(req);
}




module.exports={addressvalidate,updateaddressValidate};



