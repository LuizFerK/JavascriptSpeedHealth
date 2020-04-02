const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    create() {
        const middleware = celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                password: Joi.string().required().min(5),
                cnpj: Joi.string().required().length(14),
                whatsapp: Joi.string().required().min(10).max(11),
                description: Joi.string(),
                address: Joi.string().required(),
                city: Joi.string().required(),
                uf: Joi.string().required().length(2)
            })
        })
        return (middleware)
    }
}