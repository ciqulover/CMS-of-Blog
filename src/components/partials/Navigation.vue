<template>
  <el-menu theme="dark"
           :default-active="activeIndex"
           mode="horizontal"
           @select="handleSelect">
    <el-menu-item index="1" style="padding-left: 40px">
      <i class="fa fa-home fa-2x" style="vertical-align: middle" aria-hidden="true"></i>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">新建</template>
      <el-menu-item index="2-1">文章</el-menu-item>
      <el-menu-item index="2-2">用户</el-menu-item>
      <el-menu-item index="2-3">标签</el-menu-item>
    </el-submenu>
  </el-menu>


</template>

<script>

  export default {
    data() {
      return {
        activeIndex: '0',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
