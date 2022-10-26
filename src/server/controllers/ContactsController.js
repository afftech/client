const { User } = require('../models')
module.exports = {
  async get_all_contacts(req, res) {
    try {
      const contacts = await User.findAll()
      res.send(contacts)
    } catch (err) {
      res.status(500).send({
        error: 'Ошибка получения списка'
      })
    }
  },
  async user_get(req, res) {
    try {
      const { id } = req.body
      //const id = 1
      const user = await User.findOne({
        where: {
          id: id
        }
      });
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'Произошла ошибка при получении данных'
      })
    }
  },

  async user_delete(req, res) {
    try {
      console.log("Попытка удалить пользователя");

      const { id } = req.body

      const user = await User.destroy({
        where: {
          id: id
        }
      })
      res.send("Подьзователь удален")
      console.log("Подьзователь удален");
    } catch (err) {
      res.status(500).send({
        error: 'Произошла ошибка при удалении'
      })
    }
  },
  async user_update(req, res) {
    try {
      console.log("Попытка обновить пользователя");

      const contact = req.body
      const user = await User.update({
        name: contact.name,
        surname: contact.surname,
        patronymic: contact.patronymic,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
        password: contact.password,
        avatar: contact.avatar
      }, {
        where: {
          id: contact.id
        }
      })
      console.log("Подьзователь обновлн");
    } catch (err) {
      res.status(500).send({
        error: 'Произошла ошибка при обновлении'
      })
    }
  },
  async post(req, res) {
    try {
      const contact = await User.create(req.body)
      res.send(contact)
    } catch (err) {
      res.status(501).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}