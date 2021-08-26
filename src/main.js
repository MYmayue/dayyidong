import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 配置环境变量
import {baseUrl} from  "@/config"
console.log(baseUrl)
Vue.config.productionTip = false
// rem适配
import 'lib-flexible/flexible'
// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// axios
import axios from "axios"
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
