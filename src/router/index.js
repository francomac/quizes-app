import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/quiz/:id',
      name: 'Quiz',
      component: () => import('../views/QuizView.vue'),
      children: [
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('../components/ContactView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotMatch',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      name: 'NotFound',
      path: '/notfound',
      redirect: { name: 'NotMatch' }
    }
  ]
})

export default router
