import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import './assets/scss/style.scss'
import "./assets/icon-font/iconfont.css"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
