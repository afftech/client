const AuthentificationController = require('./controllers/AuthentificationController')
const AuthentificationControllerPolicies = require('./policies/AuthentificationControllerPolicies')

module.exports = (app) => {
  app.post('/register', AuthentificationControllerPolicies.register, AuthentificationController.registr)
  app.post('/login', AuthentificationController.login)
}
