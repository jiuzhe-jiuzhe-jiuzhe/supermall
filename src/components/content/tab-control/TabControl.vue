<template>
  <div class="tab-control">
    <div 
    v-for="(item, index) in title" :key="index" 
    class="tab-control-item"
    :class="{active: index===currentIndex}"
    @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-control",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabclick', index)
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 3px;
}
.active {
  color: red;
}
.active span {
  border-bottom: 1px solid red;
}
</style>