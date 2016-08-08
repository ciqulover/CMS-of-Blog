<template>
    <navi-header></navi-header>
    <aside class="console">
        <div class="head"></div>
        <menu class="navigation">
            <ul>
                <li class=""
                    @click="$router.go('/console/articleList')"
                >文章</li>
                <li>菜单</li>
            </ul>
        </menu>
    </aside>
    <router-view></router-view>
</template>
<script>
    import NaviHeader from './NaviHeader.vue'
    export default{
        components:{
           NaviHeader
        }
    }

</script>
<style lang="sass">
    @import "../SCSS/Console.scss";
</style>