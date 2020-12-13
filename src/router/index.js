import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index.view.vue'
import Monitor from '../views/monitor.view.vue'
import Businessval from '../views/business.val.view.vue'

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
    // component: Index
  },
  {
    path: '/monitor',
    name: 'Monitor',
    component: () => import('../views/monitor.view.vue')
    // component: Monitor
  },
  {
    path: '/businessval',
    name: 'Businessval',
    component: () => import('../views/business.val.view.vue')
    // component: Businessval
  }
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
const router = new VueRouter({
  routes
})

export default router
