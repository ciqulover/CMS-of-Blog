import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    waiting: false,
    userName: '',
    popPara: {
        pop: false
    },
    bg:''
}
const mutations = {

    TOGGLE: (state)=>state.waiting = !state.waiting,
    SETUSER: (state, userName)=>state.userName = userName,
    POP: (state, para)=>state.popPara = para,
    BGTOGGLE:(state,bg)=>state.bg=bg

}
export default new Vuex.Store({
    state,
    mutations
})