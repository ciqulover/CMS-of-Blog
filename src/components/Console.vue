<template>
    <background></background>
    <navi-header></navi-header>
    <aside class="console">
        <div class="head">
            <div class="circle">
                <img src="../img/me.jpg" alt="me">
            </div>
        </div>
        <menu class="navigation">
            <ul>
                <li @click="$router.go('/console/articleList')">
                    <i class="fa fa-file-text fa-fw"></i>
                    <span>文章</span>
                </li>
                <li @click="$router.go('/console/menu')">
                    <i class="fa fa-list-ul fa-fw"></i>
                    <span>菜单</span>
                </li>
                <li @click="$router.go('/console/theme')">
                    <i class="fa fa-star fa-fw"></i>
                    <span>主题</span>
                </li>
                <li @click="$router.go('/console/account')">
                    <i class="fa fa-user fa-fw"></i>
                    <span>账户</span>
                </li>
            </ul>
        </menu>
    </aside>
    <router-view></router-view>
</template>
<script>
    import NaviHeader from './NaviHeader.vue'
    import Background from './Background.vue'
    import {toggle, setUser} from '../vuex/actions'
    import {userName} from '../vuex/getters'
    import {get, set, unset} from '../js/cookieUtil'
    export default{
        created(){
            let userName=get('user')
            if(!this.userName && !userName){
                this.$router.go('/login')
            }else if(!this.userName){
                this.setUser(userName)
            }
        },
        components: {
            NaviHeader,
            Background
        },
        vuex: {
            getters: {
                userName,
            },
            actions: {
                setUser,
            }
        }
    }
</script>
<style lang="sass">
    @import "../SCSS/Console.scss";
</style>