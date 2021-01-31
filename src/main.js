import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/js/remScale.js'
import './assets/css/reset.css'


import $ from "jquery";
Vue.prototype.$ = $

// 引入轮播图和css和js、
import 'swiper/js/swiper.min.js'
import 'swiper/css/swiper.min.css'

//创建一个图片地址
Vue.prototype.$imgUrl = 'http://localhost:3000'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
