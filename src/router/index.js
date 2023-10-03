import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import postView from '../views/PostView.vue'
import APost from '../views/APost.vue'
import WeatherView from '../views/WeatherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post',
      name: 'Post',
      component: postView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post/:id',
      name: 'APost',
      component: APost
    },
    {
      path: '/Weather',
      name: 'Weather',
      component: WeatherView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
