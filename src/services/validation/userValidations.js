const Joi = require('joi');

const newUserValidation = data => {
    const schema = Joi.object({
        name:Joi.string().trim().required(),
        email:Joi.string().trim().email().required(),
    })

    return schema.validate(data)
}

module.exports = { newUserValidation }