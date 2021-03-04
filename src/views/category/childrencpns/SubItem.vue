<template>
  <div class="subitem">
    <div v-for="(item, index) in subitemdata.data.list" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="subimgload" />
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subitemdata: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    subimgload() {
      this.$bus.$emit('subimgload')
    },
  },
};
</script>

<style scoped>
.subitem div {
  width: 33%;
  float: left;
}

.subitem div img {
  width: 100%;
  padding: 8px;
}
.subitem div span {
  display: inline-block;
  width: 100%;
  font-size: 12px;
  text-align: center;
}
</style>