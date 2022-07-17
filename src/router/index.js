import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/views/Admin'
import Game from '@/views/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})
