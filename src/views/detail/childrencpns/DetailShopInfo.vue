<template>
  <div class="shop" v-if="Object.keys(shop).length !== 0">
    <div class="logo">
      <img :src="shop.logo" alt="" />
      <span>
        {{ shop.name }}
      </span>
    </div>
    <div class="message">
      <div class="left">
        <span>
          {{sells}}万
          <p>总销量</p>
        </span>
        <span>
          {{shop.goodsCount}}
          <p>全部宝贝</p>
        </span>
      </div>
      <div class="right">
        <p v-for="(item, index) in shop.score" :key="index"> 
          {{item.name}}
          <span>
            {{item.score}}
            <span v-if="item.isBetter" class="isbetter better">高</span>
            <span v-else class="isbetter nobetter">低</span>
          </span>
        </p>
      </div>
    </div>
    <div class="goshop">
      进店逛逛
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    sells() {
      return (this.shop.sells / 10000).toFixed(1);
    },
  },
};
</script>

<style scoped>
.shop {
  height: 170px;
  border-bottom: 5px solid #f2f5f8
}

.logo {
  height: 60px;
  line-height: 60px;
}

.logo img {
  width: 35px;
  height: 35px;
  margin: 0 8px;
  vertical-align: middle;
}

.message {
  display: flex;
}

.message div {
  flex: 1;
}

.message .left {
  display: flex;
  height: 45px;
  text-align: center;
}

.message .left span {
  flex: 1;
} 

.message .left span:nth-child(2) {
  border-right: 1px solid #f3f3f3;
}

.message .left span p {
  padding-top: 3px;
  font-size: 12px;
}

.message .right {
  margin-left: 20px;
}

.message .right p {
  position: relative;
  margin: 4px 0;
  font-size: 12px;
}

.message .right p:first-child {
  margin-top: -6px;
}

.isbetter {
  position: absolute;
  left: 85px;
}

.better {
  color: #fff;
  background-color: red;
}

.nobetter {
  color: #fff;
  background-color: green;
}

.goshop {
  width: 100px;
  height: 30px;
  margin: 10px auto;
  line-height: 30px;
  border-radius: 10px;
  text-align: center;
  background-color: #f2f5f8;
}


</style>