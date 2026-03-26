import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../views/MainLandingView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/apple',
      name: 'apple',
      component: () => import('../views/AppleView.vue'),
    },
    {
      path: '/scene-scroll',
      name: 'scene-scroll',
      component: () => import('../views/SceneScrollView.vue'),
    },
    {
      path: '/scene-explanation',
      name: 'scene-explanation',
      component: () => import('../views/SceneExplanationView.vue'),
    },
    {
      path: '/streaming',
      name: 'streaming',
      component: () => import('../views/StreamingView.vue'),
    },
  ],
})

export default router
