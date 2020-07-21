import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Traffic from '../components/power/Traffic'
import Welcomes from '../components/power/welcomes'
import Setup from '../components/setUp/setUp'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect:'/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/traffic',
        component: Traffic,
        redirect: '/traffic/welcomes',
        children: [
          {
            path: '/traffic/welcomes',
            component: Welcomes
          },
        ]
      },
      {
        path: '/setUp',
        component: Setup
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
