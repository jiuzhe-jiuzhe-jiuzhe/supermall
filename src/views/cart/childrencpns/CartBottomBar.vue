<template>
  <div class="bottom-bar">
    <div class="all-pick" @click="allClick">
      <img
        src="~assets/img/cart/tick.svg"
        alt=""
        :class="{ pick: isAllPick }"
      />
      <span>全选</span>
    </div>
    <div class="sum">合计：￥{{ totalPrice }}</div>
    <div class="gosum" @click="goPay">去计算({{ totalNum }})</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAllPick: true,
      total: 0,
      totalnum: 0,
    };
  },
  methods: {
    allClick() {
      this.isAllPick = !this.isAllPick;
      for (let i of this.$store.state.cartList) {
        i.checked = this.isAllPick;
      }
    },
    goPay() {
      if(this.totalnum === 0) {
        this.$toast.show('当前您并未选择商品')
      }else {
        this.$toast.show('正在为您')
      }
    }
  },
  computed: {
    totalPrice() {
      this.total = 0;
      for (let i of this.$store.state.cartList) {
        if (i.checked === true) this.total = this.total + i.num * i.price;
      }
      return this.total.toFixed(2);
    },
    totalNum() {
      this.totalnum = 0;
      for (let i of this.$store.state.cartList) {
        this.totalnum = i.checked === false ? this.totalnum : this.totalnum + i.num
      }
      return this.totalnum
    },
  },
  mounted() {
    this.$bus.$on("goodsNoPick", () => {
      this.isAllPick = false;
    });
    this.$bus.$on("allPick", () => {
      this.isAllPick = true;
    });
      this.isAllPick = this.$store.state.cartList.length === 0 ? false : true
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
  background-color: #eeeeee;
}

.all-pick {
  float: left;
  margin-left: 10px;
  margin-right: 25px;
}

.all-pick img {
  margin-right: 5px;
}

.pick {
  border-radius: 10px;
  background-color: red;
}

.sum {
  float: left;
}

.gosum {
  float: right;
  width: 105px;
  height: 40px;
  text-align: center;
  color: #fff;
  background-color: #ff4500;
}
</style>