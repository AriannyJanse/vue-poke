import { createRouter, createWebHistory } from '@ionic/vue-router';

import SearchPage from '../pages/SearchPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/search'
  },
  {
    path: '/search',
    component: SearchPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
