const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const { response } = require('express')




////Получение токена
function jwtSingUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
module.exports = {
  async avatar(req, res, next) {
    try{
    filedata = req.file //вот как раз здесь мы и сохраняем фото
    if (filedata)
      console.log("Всё ок")
      res.send({response: "Фото загружено"});
    } catch(error){
      res.status(400).send({
        error: 'Произошла ошибка во время загрузки фото!'
      })
    }
  },
  async register(req, res) {
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
  async login(req, res) {
    try {
      const { email, password } = req.body
      console.log(req.body)
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      console.log("пароль");
      console.log(password, user.password);
      //const isPasswordValid = await user.comparePassword(password)
      const isPasswordValid = password === user.password

      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Информация о логине не коректная'
        })
      }
      const userJson = user.toJSON()
      res.send({
        email: email,
        token: jwtSingUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Произошла ошибка при попытке входа в систему'
      })
    }
  },

}