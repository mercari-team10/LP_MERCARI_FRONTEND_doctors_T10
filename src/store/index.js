import Vue from 'vue'
import Vuex from 'vuex'
import Setting from './Setting/index'
import Chat from './Chat/index'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Setting,
    Chat
  },
  state: {
    server: 'https://lp-mercari-team10.tk/api'
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  strict: debug
})
