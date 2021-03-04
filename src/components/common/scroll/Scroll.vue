<template>
  <div class="wrapper" ref="wrapper">
    <div class="content clearfix">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      bscroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullupload: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scroll() {
      this.bscroll.on("scroll", (position) => {
        this.$emit("scroll", position.y);
      });
    },
    pullUpLoad() {
      this.bscroll.on("pullingUp", () => {
        this.$emit('loadmore')
      });
    },
    scrollTo(x, y, speed = 300) {
      this.bscroll.scrollTo(x, y, speed)
    },
    finishPullUp() {
      this.bscroll.finishPullUp()
    },
    refresh() {
      this.bscroll.refresh()
    }
  },
  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      useTransition: false, //设置滚动不模糊
      // observeDOM: true,
      probeType: this.probeType,
      click: true, //设置里面元素能进行click
      pullUpLoad: this.pullupload,
    });
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll();
    }
    if(this.pullupload === true)
    this.pullUpLoad();
  },
};
</script>

<style>
</style>