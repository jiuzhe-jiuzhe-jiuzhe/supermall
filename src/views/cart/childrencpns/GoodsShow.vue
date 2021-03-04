<template>
  <div class="goods">
    <div class="item" v-for="(item, index) in $store.state.cartList" :key="index"> 
      <img class="checked" :class="{nochecked: $store.state.cartList[index].checked}" src="~assets/img/cart/tick.svg" @click="checkedClick(index)">
      <img class="item-img" :src="item.img" alt="">
      <div class="message">
        <p class="title">{{item.title}}</p>
        <p class="desc">商品描述：{{item.desc}}</p>
        <p class="price">
          <span>￥{{item.price}}</span>
          <span>x{{item.num}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked : true
    }
  },
  methods: {
    checkedClick(index) {
      this.$store.state.cartList[index].checked = !this.$store.state.cartList[index].checked
      if(this.$store.state.cartList[index].checked === false) {
        this.$bus.$emit('goodsNoPick')
      }
      let all = this.$store.state.cartList.filter((x) => {
        return x.checked === false
      })
      if(all.length === 0)
      {
        this.$bus.$emit('allPick')
      }
      
    }
  }
}
</script>

<style scoped>
.item {
  position: relative;
  height: 120px;
  border-bottom: 2px solid #f3f3f3;
}

.checked {
  position: absolute;
  top: 50px;
  left: 5px;
  border-radius: 50%;
  background-color: #f3f3f3;
}

.nochecked {
  background-color: red;
}

.item-img {
  width: 75px;
  height: 100px;
  margin-top: 10px;
  margin-left: 30px;
  border-radius: 8px;
}

.message {
  float: right;
  width: 65%;
  height: 100px;
  margin: 10px 5px;
}

.title {
  overflow: hidden;
  font-size: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.desc {
  overflow: hidden;
  margin-top: 15px;
  font-size: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.price {
  margin-top: 25px;
  font-size: 16px;
}

.price span:first-child {
  float: left;
  color: red;
}

.price span:last-child {
  float: right;
}
</style>