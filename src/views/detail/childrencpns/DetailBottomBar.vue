<template>
  <div class="bottombar">
    <div class="icon">
      <span class="first">
        <p></p>
        <span>客服</span>
      </span>
      <span class="second">
        <p></p>
        <span>店铺</span>
      </span>
      <span class="third">
        <p></p>
        <span>收藏</span>
      </span>
    </div>
    <div class="text">
      <span @click="cartClick">加入购物车</span>
      <span>购买</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cartClick() {
      this.$emit('cartClick')
    }
  }
};
</script>

<style scoped>
.bottombar {
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 10;
  height: 49px;
  background-color: #fff;

  text-align: center;
}

.bottombar div {
  display: flex;
  flex: 1;
}

.bottombar div span {
  flex: 1;
  margin: auto;
}

.bottombar div span p {
  width: 25px;
  height: 25px;
  margin: 0 auto;
  background-size: 25px;
}

.first p {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -58px;
}

.second p {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -111px;
}

.third p {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat;
}

.text span {
  height: 49px;
  line-height: 49px;
  
} 

 .text span:first-child {
   background-color: #e4de25;
 }

 .text span:last-child {
   background-color: #e15d87;
 }
</style>