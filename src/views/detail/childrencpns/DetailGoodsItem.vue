<template>
  <div class="goodsitem" v-if="goodsitem.length > 0">
    <span class="title">{{ goodsitem[0].key }}</span>
    <ul  class="items">
      <li v-for="(item, index) in goodsitem[0].list" :key="index">
        <img :src="item" alt="" @load='imgload(index)'>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    goodsitem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgload(index) {
      this.$emit('goodsitemload')
      
    }
  }
};
</script>

<style scoped>

.goodsitem {
  border-bottom: 5px solid #f3f3f3;
}
.title {
  display: inline-block;
  margin-top: 20px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 700;
}

items li {
  width: 100vw;
  height: 300px;
}

.items li img {
  width: 100%;
  height: 100%;
}
</style>