<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <scroll class="content-left" :pullupload="false" ref="scroll1" :probe-type="0">
    <left-bar class="left" :title="categoryLeft"></left-bar>
    </scroll>
    <scroll class="content" :pullupload="false" ref="scroll2" :probe-type="0">
      <sub-category :subData="Subcategory"></sub-category>
    </scroll>
  </div>
</template>
<script>
import { getCategoryData, getSubcategory } from "network/category";
import NavBar from "../../components/common/navbar/NavBar.vue";
import LeftBar from "./childrencpns/LeftBar.vue";
import SubCategory from "./childrencpns/SubCategory.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
export default {
  components: {
    NavBar,
    LeftBar,
    SubCategory,
    Scroll,
  },
  name: "category",
  data() {
    return {
      categoryLeft: [],
      Subcategory: [],
      maitKey: [],
    };
  },
  created() {
    getCategoryData().then((res) => {
      this.categoryLeft = res.data.category.list;
      this.categoryLeft.forEach((i) => {
        getSubcategory(i.maitKey).then((res) => {
          this.Subcategory.push(res);
        });
      });
    });
    this.$bus.$on('subimgload', () => {
      this.$refs.scroll2.refresh()
      
    this.$refs.scroll1.refresh();
    })
    
  },
  mounted() {
    //

  },
  activated() {
    console.log(1);
    this.$refs.scroll1.refresh();
  },
};
</script>
<style scoped>
#category {
  height: 100vh;
  overflow: hidden;
}
.nav-bar {
  position: relative;
  z-index: 9;
  color: #fff;
  background-color: #ff8198;
}

.left {
  float: left;
}

.content {
  width: 75%;
  height: calc(100vh - 44px - 49px);
  float: left;
}

.content-left {
  float: left;
  width: 25%;
  height: calc(100vh - 44px - 49px);
}
</style>