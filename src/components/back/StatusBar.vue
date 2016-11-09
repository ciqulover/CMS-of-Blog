<template>

  <header class="statusBar">
    <router-link :to="{path:'/archive'}"
                 tag="button"
                 class="home">
      <i class="fa fa-fire fa-2x"></i>
    </router-link>
    <div class="user">
      <span>
          {{time}}好, {{user.name}}
      </span>
      <button @click="logout">
        <span>登出</span>
        <i class="fa fa-sign-out"></i>
      </button>
    </div>
  </header>
</template>
<script>
  import {unset}    from '../../assets/js/cookieUtil'
  import {mapState} from 'vuex'
  export default{
    methods: {
      logout() {
        unset('user', '/', location.hostname)
        this.$store.commit('SET_USER', {name: '', pwd: ''})
        this.$router.push('/')
      }
    },
    computed: Object.assign({
        time(){
          let hours = new Date().getHours()
          if (hours > 5 && hours < 12) {
            return '早上'
          } else if (hours > 11 && hours < 19) {
            return '下午'
          } else {
            return '晚上'
          }
        }
      },
      mapState(['user'])
    )
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/mixins.scss";
  $headerHeight: 50px;
  header.statusBar {
    height: $headerHeight;
    z-index: 1;
    .home {
      width: 200px;
      height: $headerHeight;
    }
    .user {
      height: $headerHeight;
      float: right;
      right: 20px;
      button {
        @include greenButton();
        width: 80px;
        height: 30px;
        margin: 10px;
      }
    }
  }
</style>
