<template>
  <swiper ref="swiper" v-if="banners.length" class="dswiper">
    <swiper-item v-for="(item, index) in banners" :key="index">
        <img :src="item" alt="" @load="imgload(index)" />
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    },
    
  },
  methods: {
     stopTimer() {
		    this.$refs.swiper.stopTimer()
      },
      startTimer() {
		    if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      },
      imgload(index) {
        if(index === 0)
        this.$emit('swiperimgload')
      }
  }
};
</script>

<style scoped>
.dswiper {
  height: 300px;
}
</style>