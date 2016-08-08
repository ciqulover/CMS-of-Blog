import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    count:0,
    waiting:''
}
const mutations={
    INCREMENT(state,amount){
        state.count+=amount
    },
    TOGGLE:(state)=>state.waiting=state.waiting===''? 'waiting':''

}

export default new Vuex.Store({
    state,
    mutations
})