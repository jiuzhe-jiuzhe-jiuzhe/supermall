<template>
  <div class="sub">
    <div v-for="(item, index) in subData" :key="index" v-show="item.key === currentIndex">
    <sub-item :subitemdata=item></sub-item>
    </div>
  </div>
</template>

<script>
import SubItem from './SubItem.vue'
export default {
  components: { SubItem },
  data() {
    return {
      currentIndex: '3627'
    }
  },
  props: {
    subData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {

  },
  created() {
    this.$bus.$on('leftClick', (key) => {
      this.currentIndex = key
    })
  },
  mounted() {
    
    // this.currentIndex = this.subData['0'].key
  },
}
</script>

<style scoped>
.sub {
  width: 100%;
  float: right;;
}

</style>