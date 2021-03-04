<template>
  <!-- 有div了就不要在外面包一层div了，不然flex属性会不起作用 -->
  <div class="tabbar-item" @click=itemClick>
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style=activeStyle><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  
  name: "TabBar-item",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !==-1//判断是否处于活跃状态
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
      itemClick() {
        this.$router.replace(this.path).catch(err => {})
      }
    }
}
</script>
<style>
.tabbar-item {
  flex: 1;
  text-align: center;
}
.tabbar-item img {
  width: 25px;
  height: 25px;
}
</style>
