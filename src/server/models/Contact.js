module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        patronymic: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        email: DataTypes.STRING
    })
    
    return User
}
