import Api from '@/services/Api'

export default{
  register (credentials) {
    return Api().post('register', credentials)
  }
}

/*
AuthentificationService.register({
    email: 'andreiv135@gmail.com',
    password:'12345678'
}) */
