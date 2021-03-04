<template>
  <div class="baseinfo" v-if="Object.keys(goods).length !== 0">
    <div class="title">{{ goods.title }}</div>
    <div class="price">
      <span class="realprice">{{ goods.newPrice }}</span>
      <span class="oldprice">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="columns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[seriveslength].name }}</span>
    </div>
    <div class="info-servies">
      <div v-for="index in (goods.services.length - 1)" :key="index" class="info-servies-item">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{goods.services[index - 1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    seriveslength() {
      return this.goods.services.length - 1;
    },
    columnslength() {
      if (this.goods.columns.length) return this.goods.columns.length;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.title {
  margin: 8px 3px;
  font-size: 16px;
  font-weight: 700;
}

.price {
  position: relative;
}

.realprice {
  margin-left: 5px;
  color: #bf5570;
  font-size: 20px;
}

.oldprice {
  margin: 0 5px;
  color: #939495;
  font-size: 12px;
  text-decoration: line-through;
}

.discount {
  position: absolute;
  margin-top: -5px;
  padding: 2px;
  color: #fff;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  background-color: #f65778;
}

.columns {
  display: flex;
  margin: 20px 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}
.columns span {
  flex: 1;
  color: #a5a4af;
  font-size: 13px;
  text-align: center;
}

.columns span:first-child {
  text-align: left;
}

.columns span:last-child {
  text-align: right;
}

.info-servies {
  display: flex;
  border-bottom: 5px solid #f2f5f8;
}

.info-servies {
  height: 80px;
  line-height: 80px;
}

.info-servies-item {
  flex: 1;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info-servies-item img {
  width: 15px;
  height: 15px;
  vertical-align: middle;
}


</style>