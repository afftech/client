const AuthentificationController = require('./controllers/AuthentificationController')
const AuthentificationControllerPolicies = require('./policies/AuthentificationControllerPolicies')
const ContactsController = require('./controllers/ContactsController')
const multer  = require('multer')

const storageConfig = multer.diskStorage({//метод определяющий 
  destination: (req, file, cb) => {
      cb(null, "public/uploads");//место для хранения файла
  },
  filename: (req, file, cb) => {//имя файла
      cb(null, file.originalname);
  }
});

const upload = multer({storage: storageConfig })

module.exports = (app) => {
  app.post('/register',AuthentificationControllerPolicies.register, AuthentificationController.register)
  app.post('/avatar', upload.single('image'),AuthentificationController.avatar)
  app.post('/login', AuthentificationController.login)
  app.post('/user_get', ContactsController.user_get)
  app.post('/user_delete',ContactsController.user_delete)
  app.post('/user_update',ContactsController.user_update)
  app.get('/get_all_contacts',ContactsController.get_all_contacts)
}

