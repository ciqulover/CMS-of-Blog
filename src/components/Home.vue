<template>
  <div style="height: 100%">
    <navigation></navigation>
    <side-bar></side-bar>
  </div>
</template>

<script>
  import Navigation from './partials/Navigation.vue'
  import SideBar from './partials/SideBar.vue'
  export default {
    name: 'hello',
    data () {
      return {}
    },
    components: {
      Navigation,
      SideBar
    }
  }
</script>

<style scoped>

</style>
