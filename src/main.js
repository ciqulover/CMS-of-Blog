import Vue from 'vue'
import store from './store'
import router from './router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import {sync} from 'vuex-router-sync'
import {mapState} from 'vuex'
import Spinner from './components/share/Spinner.vue'
import Toast from './components/share/Toast.vue'
import MyCanvas from './components/share/MyCanvas.vue'

Vue.filter('toDate',date=> {
  const d = new Date(date)
  return d.getFullYear() + '年' +
    (d.getMonth() + 1) + '月' +
    d.getDate() + '日'
})
Vue.use(VueResource)
Vue.use(VueValidator)

// sync(store, router)

new Vue({
  // data: {
  //   isLoading: true
  // },
  router,
  store,
  components:{Spinner,Toast,MyCanvas},
  computed:Object.assign(
    {},
    mapState(['isLoading','isToasting'])
  )

}).$mount('#CMS-Vue2')
