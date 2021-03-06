import Vue from 'vue'
import { borderBox8, decoration3 } from '@jiaminghi/data-view'
Vue.use(borderBox8)
Vue.use(decoration3)

import 'element-ui/lib/theme-chalk/index.css'
import { Progress, Tooltip, Loading } from 'element-ui'
Vue.prototype.$loading = Loading.service
Vue.use(Progress)
Vue.use(Tooltip)
