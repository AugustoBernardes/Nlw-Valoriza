const Joi = require('joi');

const AuthUserValidation = data => {
    const schema = Joi.object({
        email:Joi.string().email().trim().required(),
        password:Joi.string().trim().required(),
    })

    return schema.validate(data)
}

export  { AuthUserValidation }