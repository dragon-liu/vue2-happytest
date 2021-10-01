//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

const actions = {}
const mutations = {}
const state = {}

export default new Vuex.Store({
  actions,
  mutations,
  state
})