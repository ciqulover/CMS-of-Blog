import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import '../theme/index.css'
import CMS from './CMS.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI, {locale})

new Vue({
  el: '.CMS_ROOT',
  router,
  store,
  template: '<CMS/>',
  components: {CMS}
})
