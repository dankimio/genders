import { createRouter } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rules',
      name: 'Rules',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Rules.vue')
    },
    {
      path: '/my-words',
      name: 'mistakes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "mistakes" */ '../views/Mistakes.vue')
    }
  ]
})

export default router
