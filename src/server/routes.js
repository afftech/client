const AuthentificationController = require('./controllers/AuthentificationController')
const AuthentificationControllerPolicies = require('./policies/AuthentificationControllerPolicies')
const ContactsController = require('./controllers/ContactsController')
module.exports = (app) => {
  app.post('/register', AuthentificationControllerPolicies.register, AuthentificationController.registr)
  app.post('/login', AuthentificationController.login)
  app.post('/user_get', ContactsController.user_get)
  app.post('/user_delete',ContactsController.user_delete)
  app.get('/get_all_contacts',ContactsController.get_all_contacts)
}
