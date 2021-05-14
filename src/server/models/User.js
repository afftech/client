/*
//Крипто ф-ия 
const bcrypt = require('bcrypt');
const saltRounds = 8;
async function hashPassword (user, option) {
  if (!user.changed('password'))
  {
    return;
  }
  console.log('Start hashPassword',user.password)
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.setDataValue("password",hash)
      return user
    });
})
}
*/
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }/*, {  // для подтягивакия крипто ф-ии хеширования пароля
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  }*/
  )
  User.prototype.comparePassword = async function (password) {
    return bcrypt.compareSync(password, this.password)
  }
  return User
}
//89112479002