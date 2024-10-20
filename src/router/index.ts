import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '@/views/MenuView.vue'
import ContactView from '@/views/ContactView.vue'
import BackOffice from '@/views/BackOffice.vue'
import BlogView from '@/views/BlogView.vue'
import ArticleView from '@/views/ArticleView.vue'
import ReservationView from '@/views/ReservationView.vue'
import NoView from '@/views/NoView.vue'
import ConditionsGenerales from '@/views/ConditionsGenerales.vue'
import PolitiqueConfidentialite from '@/views/PolitiqueConfidentialite.vue'
import MentionsLegales from '@/views/MentionsLegales.vue'

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
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blog/:id',
    name: 'article',
    component: ArticleView
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
  },
  {
    path: '/conditions',
    name: 'conditions',
    component: ConditionsGenerales
  },
  {
    path: '/confidentialite',
    name: 'confidentialite',
    component: PolitiqueConfidentialite
  },
  {
    path: '/mentions',
    name: 'mentions',
    component: MentionsLegales
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
