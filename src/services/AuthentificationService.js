import Api from '@services/Api'

export default{
    register (credentails){
        return.Api.post('register',credentails)
    }
}
/*
AuthentificationService.register({
    email: 'andreiv135@gmail.com',
    password:'12345678'
})*/