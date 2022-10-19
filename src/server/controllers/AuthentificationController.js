const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

////хеширывание пароля

function jwtSingUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
module.exports = {
  async registr (req, res) {
    try {
      const user = await User.create(req.body)

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSingUser(userJson)
      })
     //console.log(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Эта учетная запись электронной почты уже существует.'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      console.log(req.body)
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      console.log(password,user.password);
      //const isPasswordValid = await user.comparePassword(password)
      const isPasswordValid = password === user.password

      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Информация о логине не коректная'})
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token:jwtSingUser(userJson)
      })
      } catch (err) {
      res.status(500).send({
        error: 'Произошла ошибка при попытке входа в систему'
      })
    }
  },

}