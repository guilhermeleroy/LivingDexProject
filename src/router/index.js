import { createRouter, createWebHistory } from 'vue-router'
import Normal_Poke from '../views/Normal.vue';
import Shiny_Poke from '../views/Shiny.vue';

const routes = [
  {
    path: '/',
    name: 'Normal',
    component: Normal_Poke
  },
  {
    path: '/shiny',
    name: 'Shiny',
    component: Shiny_Poke
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
