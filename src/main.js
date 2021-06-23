// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import 'vuetify/dist/vuetify.min.css'

import VueParticles from 'vue-particles'

Vue.use(VueParticles)

Vue.use(Vuetify)



// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)//для добавления компонента BootstrapVue

Vue.config.productionTip = false
sync(store,router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
