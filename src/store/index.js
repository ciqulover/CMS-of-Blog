import Vue from 'vue'
import Vuex from 'vuex'
import hello from './modules/hello'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    hello
  },
  strict: DEBUG
})
