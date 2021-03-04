<template>
  <div class="goodslist">
    <goods-list-item v-for="(item, index) in goodslist" :key="index"
    :goodsItem="item"/>
    </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  components: {
    GoodsListItem,
  },
  name: "goodslist",
  props: {
    goodslist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style>
.goodslist {
  overflow: hidden;
  width: 100%;
}
</style>