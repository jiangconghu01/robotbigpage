import Vue from 'vue'
import App from './App.vue'
import Appout from './Appouttime.vue'
import router from './router'
import store from './store'

import echarts from 'echarts'
import anime from 'animejs'
import '@/plugin/plugin.js'
import http from '@/util/ajax.js'
import '@/assets/scss/base.scss'

Vue.prototype.$echarts = echarts
Vue.prototype.$http = http
Vue.prototype.$anime = anime
Vue.config.productionTip = false
const d = new Date('2020/12/24').getTime()
const c = Date.now()
const isRender = true
new Vue({
  router,
  store,
  render: (h) => h(isRender ? App : Appout)
}).$mount('#app')
