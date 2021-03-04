<template>
  <div id="home">
    <navBar class="home-nav">
      <div slot="center">购物街</div>
    </navBar>
    <tab-control
      :title="['流行', '新款', '精选']"
      @tabclick="tabclick"
      class="tab-con"
      v-show="isTabconShow"
      ref="tabcontrolcp"
    ></tab-control>
    <scroll
      :probeType="3"
      :pullupload="true"
      @scroll="scrollLength"
      ref="backtop"
      @loadmore="loadmore"
    >
      <homeswiper :banners="banners" @swiperimgload="swiperimgload"> </homeswiper>
      <recommend :recommendImgs="recommends"></recommend>
      <Featureview></Featureview>
      <tab-control
        ref="tabcontrol"
        :title="['流行', '新款', '精选']"
        @tabclick="tabclick"
      ></tab-control>
      <goods-list :goodslist="showGoods"></goods-list>
    </scroll>
    <back-top v-show="isShow" @click.native="backtop"></back-top>
    
  </div>
</template>
<script>
import { getHomeMultidata, getHomeGoods } from "network/home";

import { debounce } from "@/common/utilis";

import navBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backtop/BackTop.vue";

import recommend from "./childrenCpn/recommends";
import Featureview from "./childrenCpn/featureview.vue";
import TabControl from "components/content/tab-control/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Homeswiper from './childrenCpn/HomeSwiper';

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      isShow: false,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      offsetTop: 0,
      isTabconShow: false,
      saveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  components: {
    navBar,
    Swiper,
    Scroll,
    BackTop,
    recommend,
    Featureview,
    TabControl,
    GoodsList,
    Homeswiper,
  },
  created() {
    this.getHomeMultidata(), this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.backtop.refresh, 50);
    this.$bus.$on("HomeimgLoad", () => {
      refresh();
    });
  },
  activated() {
    this.$refs.backtop.refresh()
    this.$refs.backtop.scrollTo(0, this.saveY, 0)
    
  },
  deactivated() {
    this.saveY = this.$refs.backtop.bscroll.y
  },
  methods: {
    //事件监听方法
    tabclick(index) {
      if (index === 0) {
        this.currentType = "pop";
      }
      if (index === 1) {
        this.currentType = "new";
      }
      if (index === 2) {
        this.currentType = "sell";
      }
      this.$refs.tabcontrolcp.currentIndex = index;
      this.$refs.tabcontrol.currentIndex = index;
    },
    scrollLength(position) {
      this.isShow = -position > 1000 ? true : false;
      this.isTabconShow = this.offsetTop < -position;
    },
    backtop() {
      this.$refs.backtop && this.$refs.backtop.scrollTo(0, 0);
    },
    loadmore() {
      this.getHomeGoods(this.currentType);
    },
    swiperimgload() {
      this.offsetTop = this.$refs.tabcontrol.$el.offsetTop;
    },

    //网络请求方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.backtop && this.$refs.backtop.finishPullUp();
      });
    },
  },
};
</script>
<style scoped>
#home {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.home-nav {
  position: relative;
  z-index: 9;
  background-color: #ff8198;
  color: #fff;
  font-weight: 700;
}

.wrapper {
  /* height: calc(100vh - 93px); */
  /* overflow: hidden; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-con {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>