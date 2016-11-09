<template>
  <header class="myHeader">
    <div class="circle">
      <img src="../../assets/img/me.jpg" alt="ycwalker">
    </div>
    <ul class="menu">
      <li v-for="link in links">
        <a :href="link.href">
          {{link.name}}
        </a>
      </li>
    </ul>
  </header>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    created(){
      this.$store.dispatch('getLinks')
    },
    computed: mapState(['links'])
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>

  header.myHeader {
    min-height: 60px;
    .circle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 60px;
        height: 60px;
      }
    }
    ul {
      float: right;
      margin: 0;
      li {
        list-style: none;
        display: inline-block;
        padding: 18px 14px;
        a {
          color: #2c3e50;
          &:hover {
            text-decoration: none;
            border-bottom: 2px solid #42b983;
          }
        }
      }
    }
  }
</style>
