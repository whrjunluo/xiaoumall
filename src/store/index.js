//引入核心库
import Vue from 'vue'
//引入 vuex 插件
import Vuex from 'vuex'

import leftNav from './leftNav'


Vue.use(Vuex)

export default new Vuex.Store({
  //模块
  modules: {
    leftNav,

  }
})
