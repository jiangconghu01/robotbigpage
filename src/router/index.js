import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/singleindex',
    name: 'Singleindex',
    component: () => import('../views/index.single.view.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index.view.vue')
  },
  {
    path: '/monitor',
    name: 'Monitor',
    component: () => import('../views/monitor.view.vue')
  },
  {
    path: '/businessval',
    name: 'Businessval',
    component: () => import('../views/business.val.view.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
