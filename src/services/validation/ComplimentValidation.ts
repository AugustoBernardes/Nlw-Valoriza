const Joi = require('joi');

const ComplimentValidation = data => {
    const schema = Joi.object({
        message:Joi.string().trim().required(),
    })

    return schema.validate(data)
}

export  { ComplimentValidation }