import { createRouter, createWebHistory } from '@ionic/vue-router';

import SearchPage from '../pages/SearchPage.vue';
import PokemonDetailPage from '../pages/PokemonDetailPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/search'
  },
  {
    path: '/search',
    component: SearchPage
  },
  {
    path: '/pokemon/',
    component: PokemonDetailPage,
    children: [
      {
        path: '',
        redirect: '/pokemon/info'
      },
      {
        path: 'info',
        component: () => import('../pages/PokemonInfoPage.vue')
      },
      {
        path: 'moves',
        component: () => import('../pages/PokemonMovesPage.vue')
      },
      {
        path: 'more',
        component: () => import('../pages/PokemonMorePage.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
