import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '@/views/MenuView.vue'
import ContactView from '@/views/ContactView.vue'
import ReservationView from '@/views/ReservationView.vue'
import BackOffice from '@/views/BackOffice.vue'
import NoView from '@/views/NoView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NoView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu-office',
    component: MenuView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: ReservationView
  },
  {
    path: '/back-office',
    name: 'back-office',
    component: BackOffice
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
