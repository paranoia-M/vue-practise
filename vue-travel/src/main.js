import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/reset.css'
import './assets/css/iconfont.css'
import 'swiper/css/swiper.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios

import FastClick from 'fastclick'
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
