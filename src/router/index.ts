import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/top',
      name: 'Top',
      component: () => import('../views/TopView.vue')
    }
  ]
})

