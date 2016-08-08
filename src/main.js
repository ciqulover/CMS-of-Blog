import Vue from 'vue'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
Vue.use(VueResource)
Vue.use(VueValidator)
Vue.use(VueRouter)
Vue.use(Vuex)


import Login from './components/Login.vue'
import Waiting from './components/Waiting.vue'
import Article from  './components/Article.vue'
import Editor from './components/Editor.vue'
import Console from './components/Console.vue'
import ArticleList from './components/ArticleList.vue'

import store from './vuex/store'

let router = new VueRouter()

router.map({
    '/': {
        component: Login
    },
    '/article':{
        component:Article
    },
    '/console':{
        component:Console,
        subRoutes:{
            '/':{
                component:{
                    template:'<div>default</div>'
                }
            },
            '/editor':{
                component:Editor
            },
            '/articleList':{
                component:ArticleList
            }
        }
    }


})
let App = Vue.extend({
    data(){
        return{

        }
    },
    components: {Waiting},
    http: {
        root: '/'
    },
    computed:{
        waiting:()=>store.state.waiting
    },
    store,
    ready(){

    }
})

router.start(App, 'body')

