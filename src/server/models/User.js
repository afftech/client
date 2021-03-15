const { hash } = require('bcrypt-nodejs');
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, option) {
  const SALT_FACTOR = 8
  console.log('hashPassword')
  if (!user.change('password')) {
    return;
  }
  return bcrypt
    .getSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}
module.exports = (sequelize, DataTypes) =>{
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }
  return User
}
