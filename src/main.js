import Vue from 'vue'
import App from './App.vue'
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

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
