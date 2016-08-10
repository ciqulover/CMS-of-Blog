function toggle(store) {
    store.dispatch('TOGGLE')
}
function setUser({dispatch},userName){
    dispatch('SETUSER',userName)
}

export {
    toggle,setUser
}