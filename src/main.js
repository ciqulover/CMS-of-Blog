import Vue          from 'vue'
import VueResource  from 'vue-resource'
import {mapState}   from 'vuex'

import Spinner      from './components/share/Spinner.vue'
import Toast        from './components/share/Toast.vue'
import MyCanvas     from './components/share/MyCanvas.vue'

import store        from './store'
import router       from './router'

import './style/index.scss'

Vue.use(VueResource)

Vue.filter('toDate', date => {
  const d = new Date(date)
  return d.getFullYear() + '年' +
    (d.getMonth() + 1) + '月' +
    d.getDate() + '日'
})

new Vue({
  router,
  store,
  components: {Spinner, Toast, MyCanvas},
  computed: mapState(['isLoading', 'isToasting'])
}).$mount('#CMS2')

console.log(`
      ___           ___           ___           ___           ___       ___           ___           ___     
     |\\__\\         /\\  \\         /\\__\\         /\\  \\         /\\__\\     /\\__\\         /\\  \\         /\\  \\    
     |:|  |       /::\\  \\       /:/ _/_       /::\\  \\       /:/  /    /:/  /        /::\\  \\       /::\\  \\   
     |:|  |      /:/\\:\\  \\     /:/ /\\__\\     /:/\\:\\  \\     /:/  /    /:/__/        /:/\\:\\  \\     /:/\\:\\  \\  
     |:|__|__   /:/  \\:\\  \\   /:/ /:/ _/_   /::\\~\\:\\  \\   /:/  /    /::\\__\\____   /::\\~\\:\\  \\   /::\\~\\:\\  \\ 
     /::::\\__\\ /:/__/ \\:\\__\\ /:/_/:/ /\\__\\ /:/\\:\\ \\:\\__\\ /:/__/    /:/\\:::::\\__\\ /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:\\__\\
    /:/~~/~    \\:\\  \\  \\/__/ \\:\\/:/ /:/  / \\/__\\:\\/:/  / \\:\\  \\    \\/_|:|~~|~    \\:\\~\\:\\ \\/__/ \\/_|::\\/:/  /
   /:/  /       \\:\\  \\        \\::/_/:/  /       \\::/  /   \\:\\  \\      |:|  |      \\:\\ \\:\\__\\      |:|::/  / 
   \\/__/         \\:\\  \\        \\:\\/:/  /        /:/  /     \\:\\  \\     |:|  |       \\:\\ \\/__/      |:|\\/__/  
                  \\:\\__\\        \\::/  /        /:/  /       \\:\\__\\    |:|  |        \\:\\__\\        |:|  |    
                   \\/__/         \\/__/         \\/__/         \\/__/     \\|__|         \\/__/         \\|__|    
`)
