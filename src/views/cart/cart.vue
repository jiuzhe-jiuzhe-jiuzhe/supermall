<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{$store.state.cartList.length}})</div>
    </nav-bar>
    <scroll class="content" :probe-type="0" :pullupload="false" ref="scroll">
      <goods-show ></goods-show>
      </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue"
import Scroll from '../../components/common/scroll/Scroll.vue'
import CartBottomBar from './childrencpns/CartBottomBar.vue'
import GoodsShow from './childrencpns/GoodsShow.vue'

export default {
  name: 'cart',
  components: {
    NavBar,
    CartBottomBar,
    GoodsShow,
    Scroll
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>
<style scoped>

#cart {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.cart-nav {
  position: relative;
  z-index: 10;
  color: #fff;
  background-color: #ff8198;
}

#cart .content {
  height: calc(100% - 44px - 49px - 40px);
}
</style>