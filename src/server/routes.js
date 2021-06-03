const AuthentificationController = require('./controllers/AuthentificationController')
const AuthentificationControllerPolicies = require('./policies/AuthentificationControllerPolicies')
const ContactsController = require('./controllers/ContactsController')
module.exports = (app) => {
  app.post('/register', AuthentificationControllerPolicies.register, AuthentificationController.registr)
  app.post('/login', AuthentificationController.login)
  app.get('/get_all_contacts',ContactsController.get_all_contacts)
}
