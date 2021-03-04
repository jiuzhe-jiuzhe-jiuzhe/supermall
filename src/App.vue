<template>
  <div id="app">
    <keep-alive exclude="detail"><router-view/></keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import mainTabbar from "components/content/MainTabbar/mainTabbar";
export default {
  name: "App",
  components: {
    mainTabbar
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
