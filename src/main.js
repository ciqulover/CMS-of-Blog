import Vue            from 'vue'
import VueResource    from 'vue-resource'
import {mapState}     from 'vuex'

import Spinner        from './components/share/Spinner.vue'
import Toast          from './components/share/Toast.vue'
import MyCanvas       from './components/share/MyCanvas.vue'
import StyleInjector  from './components/StyleInjector.vue'

import store          from './store'
import router         from './router'

Vue.use(VueResource)

Vue.filter('toDate', date=> {
  const d = new Date(date)
  return d.getFullYear() + '年' +
    (d.getMonth() + 1) + '月' +
    d.getDate() + '日'
})

new Vue({
  router,
  store,
  components: {Spinner, Toast, MyCanvas, StyleInjector},
  computed: mapState(['isLoading', 'isToasting'])
}).$mount('#CMS2')
