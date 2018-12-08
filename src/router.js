import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/layouts/Login.vue'
import Panel from './components/layouts/Panel.vue'
import User from './components/views/User.vue'
import Order from './components/views/Orders.vue'
import Daily from './components/views/Daily.vue' 
import Company from './components/views/Company.vue' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/panel',
      name: 'panel',
      redirect: '/panel/user',
      component: Panel,
      children: [
        {
          path: 'user',
          name: 'user',
          component: User,
          meta: {
            requiredRol: true,
            requiredAuth: true
          }
        },
        {
          path: 'order',
          name: 'order',
          component: Order,
          meta: {
            requiredRol: true,
            requiredAuth: true
          }
        },
        {
          path: 'daily',
          name: 'daily',
          component: Daily,
          meta: {
            requiredRol: true,
            requiredAuth: true
          }
        },
        {
          path: 'company',
          name: 'company',
          component: Company,
          meta: {
            requiredRol: true,
            requiredAuth: true
          }
        }
      ]
    },
    {
      path: '*',
      name: '404',
      redirect: '/',
    }
  ]
})
