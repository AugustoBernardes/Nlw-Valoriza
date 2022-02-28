const Joi = require('joi');

const NewUserValidation = data => {
    const schema = Joi.object({
        name:Joi.string().trim().required(),
        email:Joi.string().trim().email().required(),
        admin:Joi.boolean()
    })

    return schema.validate(data)
}

export default NewUserValidation