
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import("../componetes/pages/user-login.component.vue")
    },
    {
      path: '/parkingList',
      name: 'parkingList',
      component: () => import("../componetes/pages/park-list.component.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../componetes/pages/login-page.component.vue")
    },
    {
      path: '/addnewtrip',
      name: 'addnewtrip',
      component: () => import("../componetes/pages/add-new-trip.component.vue")
    },
    {
      path:'/flighthistory',
      name:'flighthistory',
      component: () => import("../componetes/pages/flighthistory.component.vue")
    },
  ]

})

export default router