<template>
  <div class="dnavbar">
    <nav-bar>
      <div slot="left" class="left" @click='back'>
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item, index) in title" :key=index
        @click="centerclick(index)"
        :class="{active: currentIndex === index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'Dnavbar',
  data() {
    return {
      title: ['商品', '参数', '评论' ,'推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    centerclick(index) {
      this.currentIndex = index
      this.$emit('navClick', index)
    },
    back() {
      this.$router.back()
    }
  }

}
</script>
<style scoped>
.center {
  display: flex;
}
.center div {
  flex: 1;
}
.active {
  color: red;
}
.left {
  margin-top: 6px;
}
</style>