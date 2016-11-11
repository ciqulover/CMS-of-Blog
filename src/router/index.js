import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Archive  from '../components/front/Archive.vue'
import Article  from '../components/front/Article.vue'
import Console  from '../components/back/Console.vue'
import Login    from '../components/back/Login.vue'
import OverView from '../components/back/OverView.vue'
import Articles from '../components/back/Articles.vue'
import Editor   from '../components/back/Editor.vue'
import Links    from '../components/back/Links.vue'
import Account  from '../components/back/Account.vue'


export default new Router({
  mode: 'history',
  routes: [
    {path: '/archive', component: Archive},
    {path: '/article', component: Article},
    {path: '/', component: Login},
    {
      path: '/console',
      component: Console,
      children: [
        {path: '', component: Articles, name: 'archive'},
        {path: 'articles', component: Articles, name: 'articles'},
        {path: 'editor', component: Editor, name: 'editor'},
        {path: 'links', component: Links, name: 'links'},
        {path: 'account', component: Account, name: 'account'}
      ]
    }
  ]
})
