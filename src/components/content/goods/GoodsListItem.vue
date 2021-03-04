<template>
  <div class="goodslistitem">
      <img :src="showimage" alt="" @load=onload
      @click='click(goodsItem.iid)' />
      <div class="title">
        <div class="title">{{ goodsItem.title }}</div>
        <div class="test">
          <span class="price">{{ "￥" + goodsItem.price }}</span>
          <span class="collect">{{ goodsItem.cfav }}</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showimage() {
      return this.goodsItem.image  || this.goodsItem.show.img
    }
  },
  methods: {
    onload() {
      if(this.$route.path.indexOf('home') === 1) {
        this.$bus.$emit('HomeimgLoad')
      }
       if(this.$route.path.indexOf('detail')  === 1) {
        this.$bus.$emit('DetailimgLoad')
      }
      
    },
    click(id) {
      this.$router.push('/detail/' + id)
    }
  },
};
</script>

<style scoped>
.goodslistitem {
  float: left;
  width: 50%;
  margin-bottom: 10px;
  padding: 2px 3px;
}

.title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 2px;
  font-size: 12px;
}

.test {
  /* margin: 0 atuo; */
  margin-top: 4px;
  transform: translateX(30%);
}

.price {
  margin-right: 3px;
  color: red;
}

.goodslistitem img {
  width: 100%;
  height: 300px;
}

.collect::before{
  content: '☆';
  font-size: 14px;
}
</style>