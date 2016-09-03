import Vue          from 'vue'
import VueResource  from 'vue-resource'
import VueValidator from 'vue-validator'
import VueRouter    from 'vue-router'
import Vuex         from 'vuex'

import Login        from './components/Login.vue'
import Waiting      from './components/Waiting.vue'
import Pop          from './components/Pop.vue'
import Article      from './components/Article.vue'
import Editor       from './components/Editor.vue'
import Console      from './components/Console.vue'
import ArticleList  from './components/ArticleList.vue'
import Archive      from './components/Archive.vue'
import Menu         from './components/Menu.vue'
import Account      from './components/Account.vue'
import Theme        from './components/Theme.vue'
import Background   from './components/Background.vue'
import MyCanvas     from './components/MyCanvas.vue'

import store        from './vuex/store'

Vue.use(VueResource)
Vue.use(VueValidator)
Vue.use(VueRouter)
Vue.use(Vuex)

let router = new VueRouter()

router.map({
    '/': {
        component: Archive
    },
    'login': {
        component: Login
    },
    '/article': {
        component: Article
    },
    '/console': {
        component: Console,
        subRoutes: {
            '/': {
                component: ArticleList
            },
            '/editor': {
                component: Editor
            },
            '/articleList': {
                component: ArticleList
            },
            '/menu': {
                component: Menu
            },
            'account': {
                component: Account
            },
            'theme': {
                component: Theme
            }

        },
    },
})
let App = Vue.extend({
    data(){
        return {}
    },
    components: {Waiting,Pop,Background,MyCanvas},
    http: {
        root: '/'
    },
    computed: {
        waiting: ()=>store.state.waiting,
        pop:()=>store.state.popPara.pop,
        bg:()=>store.state.bg,
    },
    store,
    ready(){
        let style=[
            `
            background-image:-webkit-gradient( 
            linear, left top, right top,
            color-stop(0, #f22), color-stop(0.15, #f2f), 
            color-stop(0.3, #22f), color-stop(0.45, #2ff), 
            color-stop(0.6, #2f2),color-stop(0.75, #2f2), 
            color-stop(0.9, #ff2), color-stop(1, #f22) );
            color:transparent;
            -webkit-background-clip: text;
            font-size:2em
            `
        ].join(';')
        console.log('%c呜呜你要对我的代码做什么...', style);
    }
})

router.start(App, 'body')