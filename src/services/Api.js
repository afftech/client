/* eslint-disable */
import axios from 'axios'

export default () =>{
    return axios.create({
    baseURL: `http://193.169.63.222:8081/`
    })
}