const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      name: Joi.string(),
      surname:Joi.string(),
      patronymic:Joi.string(),
      phoneNumber:Joi.string(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ru'] } }),
      password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/)
    })
    const value = schema.validate(req.body)

    if (value.error) {
      switch (value.error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must a valid provide email address'
          })
          break

        case 'password':
          res.status(400).send({
            error: `The password provided filed to match the following rules:
                    <br>
                    1.It must contain ONLY the following characters: LOVER CASE, UPPER CASE,
                    <br> It must be at least 8 characters in lenght and not greater than characters in lenght.
                    `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
