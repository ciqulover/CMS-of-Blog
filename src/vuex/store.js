import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    waiting:'',
    userName:'',
}
const mutations={

    TOGGLE:(state)=>state.waiting=state.waiting===''? 'waiting':'',
    SETUSER:(state,userName)=>state.userName=userName,

}
export default new Vuex.Store({
    state,
    mutations
})