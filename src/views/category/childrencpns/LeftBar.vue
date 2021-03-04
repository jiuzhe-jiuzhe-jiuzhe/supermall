<template>
  <div class="left-bar">
    <ul>
      <li :class="{active: index === currentIndex}" v-for="(item, index) in title" :key="index" @click=click(index,item.maitKey)>
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    click(index,key) {
      this.currentIndex = index
      this.$bus.$emit('leftClick',key)
    }
  },
  created() {
    
  }
  
};
</script>

<style scoped>
.left-bar {
  width: 100%;
  text-align: center;
  background-color: #f6f6f6;
}

.left-bar ul li {
  height: 50px;
  line-height: 50px;
}

.active {
  color: #ff5777;
  font-weight: 700;
  background-color: #fff;
  border-left: 2px solid #ff5777;
}
</style>