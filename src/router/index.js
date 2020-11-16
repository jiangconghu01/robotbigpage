import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'All',
    redirect: '/index'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
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
