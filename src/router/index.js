
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
      component: () => import("../parking/pages/user-login.component.vue")
    },
    {
      path: '/parkingList',
      name: 'parkingList',
      component: () => import("../parking/pages/park-list.component.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../parking/pages/login-page.component.vue")
    },
    {
      path: '/addnewtrip',
      name: 'addnewtrip',
      component: () => import("../parking/pages/add-new-trip.component.vue")
    },
    {
      path:'/flighthistory',
      name:'flighthistory',
      component: () => import("../parking/pages/flighthistory.component.vue")
    },
  ]

})

export default router