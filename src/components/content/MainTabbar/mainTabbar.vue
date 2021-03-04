<template>
<tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/图标1.png" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/图标5.png" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/图标2.png" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/图标6.png" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/图标3.png" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/图标7.png" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/图标4.png" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/图标8.png" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>  
</template>

<script>

import TabBarItem from "components/common/tabbar/TabBar-item.vue";
import TabBar from "components/common/tabbar/TabBar.vue";
export default {
  name: 'mainTabbar',
  components: {
    TabBarItem,
    TabBar
  }
}
</script>

<style>

</style>