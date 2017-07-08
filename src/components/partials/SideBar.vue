<template>
  <el-menu class="side-menu" default-active="1-1" @open="handleOpen" @close="handleClose" theme="dark">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>文章</template>
      <el-menu-item index="1-1">写文章</el-menu-item>
      <el-menu-item index="1-2">所有文章</el-menu-item>
      <el-menu-item index="1-3">分类</el-menu-item>
      <el-menu-item index="1-4">标签</el-menu-item>
    </el-submenu>
    <el-menu-item index="2"><i class="el-icon-menu"></i>统计</el-menu-item>
    <el-menu-item index="3"><i class="el-icon-menu"></i>评论</el-menu-item>
    <el-submenu index="4">
      <template slot="title"><i class="el-icon-message"></i>用户</template>
      <el-menu-item index="4-1">所有用户</el-menu-item>
      <el-menu-item index="4-2">添加用户</el-menu-item>
      <el-menu-item index="4-3">我的资料</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title"><i class="el-icon-message"></i>设置</template>
      <el-menu-item index="5-1">站点设置</el-menu-item>
      <el-menu-item index="5-2">修改密码</el-menu-item>
      <el-menu-item index="5-3">固定链接</el-menu-item>
    </el-submenu>
  </el-menu>
</template>


<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .side-menu {
    height: calc(100% - 60px);
    width: 200px;
  }
</style>
