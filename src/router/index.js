import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home'
import Classify from '../components/classify'
import ShopCart from '../components/shopcart'
import User from '../components/user'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      component: () => import('../pages/index'),
      children: [{
          path: '/home',
          component: Home
        },
        {
          path: '/classify',
          component: Classify
        },
        {
          path: '/shopCart',
          component: ShopCart
        },
        {
          path: '/user',
          component: User
        },
        {
          path: '',
          redirect: '/home'
        },
      ]
    },
    {
      path: '/list',
      component: () => import('../pages/goodsList')
    },
    {
      path: '/detail',
      component: () => import('../pages/detail')
    },
    {
      path: '/register',
      component: () => import('../pages/register')
    },
    {
      path: '/login',
      component: () => import('../pages/login')
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
