import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import News from '@/components/News'
import Header from '@/components/Header'
import Contacts from '@/components/Contacts'
import Modwind from '@/components/Modwind'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    }
    ,
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Modwind',
      name: 'Modwind',
      component: Modwind
    }
  ]
})