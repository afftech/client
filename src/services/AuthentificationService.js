import Api from '@/services/Api'

export default{
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  get_all_contacts (credentials) {
    return Api().get('get_all_contacts', credentials)
  },
  user_delete (credentials) {
    return Api().post('user_delete', credentials)
  },
  user_update (credentials) {
    return Api().post('user_update', credentials)
  },
  user_get (credentials) {
    return Api().post('user_get', credentials)
  },
}

/*
AuthentificationService.register({
    email: 'andreiv135@gmail.com',
    password:'12345678'
}) */
