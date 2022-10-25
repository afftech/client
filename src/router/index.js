import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'
import Header from '@/components/Header'
import Contacts from '@/components/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
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
  ]
})