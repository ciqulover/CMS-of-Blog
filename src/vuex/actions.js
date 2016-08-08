export const incrementCounter=function ({dispatch,state}) {
    dispatch('INCREMENT',1)
}
export const toggle=function (store) {
    console.log(store)
    store.dispatch('TOGGLE')
}