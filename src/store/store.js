import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import AuthentificationService from "@/services/AuthentificationService";

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        email: null,
        isUserLoggedIn: false,
        products: [],
    },
    mutations: {
        setEmail(state, email) {
            state.email = email
        },
        setToken(state, token) {
            state.token = token
            if (token) {
                state.isUserLoggedIn = true
            } else {
                state.isUserLoggedIn = false
            }
        },
        setContacts(state,contacts){
            state.token = contacts
        }
    },
    actions: {
        setToken({ commit }, token) {
            commit('setToken', token)
        },
        setEmail({ commit },email) {
            commit('setEmail',email)
        },
        setContacts(state,contacts)
        {
            this.commit('setContacts',contacts)
        }
    },
    getters: {
        GET_EMAIL(state) {
            return state.email
        }
    }
})