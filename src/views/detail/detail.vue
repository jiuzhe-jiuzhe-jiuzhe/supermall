<template>
  <div id="detail">
    <dnavbar class="dnavbar" @navClick="navClick" ref="nav"></dnavbar>
    <scroll :pullupload=true ref="scroll" @scroll=scroll  :probe-type='3'>
      <detail-swiper
        :banners="swiperdata"
        @swiperimgload="swiperimgload"
      ></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-desc :desc="desc"></detail-desc>
      <detail-goods-item
        :goodsitem="Goodsitem"
        @goodsitemload="goodsitemload"
      ></detail-goods-item>
      <detail-goodsparams
        ref="parmas"
        :params="Goodsparam"
      ></detail-goodsparams>
      <detail-user-eva ref="evaluat" :evaluate="usereva"></detail-user-eva>
      <goods-list
        ref="recommend"
        :goodslist="recommendList"
        @imgLoad="goodsitemload"
      ></goods-list>
    </scroll>
    <back-top v-show="isShow" @click.native='backtop'></back-top>
    <detail-bottom-bar @cartClick='cartClick'></detail-bottom-bar>
  </div>
</template>

<script>
import {
  detaildata,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";

import { debounce } from "common/utilis";

import scroll from "components/common/scroll/Scroll";
import Dnavbar from "./childrencpns/Dnavbar.vue";
import Swiper from "components/common/swiper/Swiper.vue";
import DetailSwiper from "./childrencpns/DetailSwiper.vue";
import DetailBaseInfo from "./childrencpns/detailBaseInfo.vue";
import DetailShopInfo from "./childrencpns/DetailShopInfo.vue";
import DetailDesc from "./childrencpns/DetailDesc.vue";
import DetailGoodsItem from "./childrencpns/DetailGoodsItem.vue";
import DetailGoodsparams from "./childrencpns/DetailGoodsparams.vue";
import DetailUserEva from "./childrencpns/DetailUserEva.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import DetailBottomBar from './childrencpns/DetailBottomBar.vue';
import BackTop from '../../components/content/backtop/BackTop.vue';

import { mapActions } from 'vuex'
export default {
  components: {
    scroll,
    Dnavbar,
    Swiper,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailDesc,
    DetailGoodsItem,
    DetailGoodsparams,
    DetailUserEva,
    GoodsList,
    DetailBottomBar,
    BackTop,
  },
  name: "detail",
  data() {
    return {
      iid: null,
      swiperdata: [],
      goods: {},
      shop: {},
      desc: "",
      Goodsitem: [],
      Goodsparam: {},
      usereva: [],
      recommendList: [],
      idx: 0,
      isShow: false,
    };
  },
  methods: {
    ...mapActions({
      add: 'addList'
    }),
    swiperimgload() {
      // this.$refs.scroll.refresh();
    },
    goodsitemload() {
      // this.$refs.scroll.refresh();
    },
    navClick(index) {
      if (index === 0) {
        this.$refs.scroll.scrollTo(0, 0, 200);
      }
      if (index === 1) {
        console.log(this.$refs.parmas.$el.offsetTop);
        this.$refs.scroll.scrollTo(0, -this.$refs.parmas.$el.offsetTop, 200);
      }
      if (index === 2) {
        console.log(this.$refs.evaluat.$el.offsetTop);
        this.$refs.scroll.scrollTo(0, -this.$refs.evaluat.$el.offsetTop, 200);
      }
      if (index === 3) {
        console.log(this.$refs.recommend.$el.offsetTop);
        this.$refs.scroll.scrollTo(0, -this.$refs.recommend.$el.offsetTop, 200);
      }
      
    },
    scroll(positionY) {
      // console.log(positionY);
      if(-positionY < this.$refs.parmas.$el.offsetTop){
        this.idx = 0
      }else if(-positionY < this.$refs.evaluat.$el.offsetTop) {
        this.idx = 1
      }else if(-positionY < this.$refs.recommend.$el.offsetTop) {
        this.idx = 2
      } else {
        this.idx = 3
      }
      this.$refs.nav.currentIndex = this.idx
      this.isShow = -positionY > 1000 ? true : false;
    },
    backtop() {
      this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0)
    },
    cartClick() {
      const product = {}
      product.img = this.swiperdata[0]
      product.iid = this.iid
      product.desc = this.desc
      product.price = this.goods.realPrice
      product.title = this.goods.title
      product.checked = true
      this.add(product).then(res => {
        this.$toast.show(res)
      })
      // this.$store.dispatch('addList', product).then(res => {
      //   console.log(res);
      // })
    }
  },
  computed: {
  },
  created() {
    this.iid = this.$route.params.id;
    detaildata(this.iid).then((res) => {
      const data = res.result;
      // console.log(data);
      this.swiperdata = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.desc = data.itemInfo.desc;
      this.Goodsitem = data.detailInfo.detailImage;
      this.Goodsparam = new GoodsParam(data.itemParams);
      this.usereva = data.rate.list;
    });
    getRecommend().then((res) => {
      // console.log(res.data.list);
      this.recommendList = res.data.list;
    });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("DetailimgLoad", () => {
      refresh();
    });

    this.$refs.scroll.scrollTo(0, 1, 20);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
}

.dnavbar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.wrapper {
  height: calc(100% - 44px - 49px);
}
</style>