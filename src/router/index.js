import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue')
    },
    {
      path: '/profile',
      name: 'client',
      component: () => import('../views/profile/ClientView.vue'),
      redirect: '/profile/client-info', // Redirect to client-info
      children: [
        {
          path: 'client-info',
          name: 'client-info',
          component: () => import('../components/profile/ClientInfoCom.vue')
        },
        {
          path: 'change-pass',
          name: 'change-pass',
          component: () => import('../components/profile/ChangePassCom.vue')
        }
      ]
    },
    {
      path: '/server-erro',
      name: 'servererror',
      component: () => import('../views/ServerError.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: 'errorpage',
      component: () => import(/* webpackChunkName: "errorpage" */ '../views/ErrorView.vue')
    }
  ]
})

export default router
