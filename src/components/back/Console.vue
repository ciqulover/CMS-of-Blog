<template>
  <div class="container">
    <status-bar></status-bar>
    <aside class="console">
      <div class="circle">
        <img src="../../assets/img/me.jpg" alt="me">
      </div>
      <menu class="navigation">
        <ul>
          <router-link :to="{path:'/archive'}" tag="li">
            <i class="fa fa-star fa-fw"></i>
            <span>总览</span>
          </router-link>
          <router-link :to="{name:'articles'}" tag="li">
            <i class="fa fa-file-text fa-fw"></i>
            <span>文章</span>
          </router-link>
          <router-link :to="{name:'links'}" tag="li">
            <i class="fa fa-list-ul fa-fw"></i>
            <span>链接</span>
          </router-link>
          <router-link :to="{name:'account'}" tag="li">
            <i class="fa fa-user fa-fw"></i>
            <span>账户</span>
          </router-link>
        </ul>
      </menu>
    </aside>
    <div class="subView">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import {get}        from '../../assets/js/cookieUtil'
  import StatusBar    from './StatusBar.vue'
  import {mapState, mapMutations}   from 'vuex'

  export default{
    created(){
      const user = get('user')
      if (!user) this.$router.push('/')
      if (user && !this.user.name) this.SET_USER({name: user, pwd: ''})
    },
    components: {StatusBar},
    computed: mapState(['user']),
    methods: mapMutations(['SET_USER'])
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  $pictureSize: 100px;
  .container {
    height: 100%;
  }

  aside.console {
    box-sizing: border-box;
    padding-top: 50px;
    float: left;
    height: calc(100% - 50px);
    width: 200px;
    background-color: transparent;
    .circle {
      width: $pictureSize;
      height: $pictureSize;
      margin: auto;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: $pictureSize;
        height: $pictureSize;
      }
    }
    menu {
      margin: 20px 0;
      padding: 0;
      ul {
        padding: 0 50px;
        > li {
          transition: all 0.4s;
          margin-top: 10px;
          padding-left: 4px;
          cursor: pointer;
          height: 40px;
          line-height: 40px;
          > span {
            display: inline-block;
            margin-left: 20px;
          }
          &:hover {
            padding-left: 8px;
          }
        }
      }
    }
  }

  div.subView {
    margin-left: 200px;
    height: calc(100% - 50px);
  }
</style>
