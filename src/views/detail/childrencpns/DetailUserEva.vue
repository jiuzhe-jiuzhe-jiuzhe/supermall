<template>
  <div class="evaluate" v-if="evaluate.length > 0">
    <div class="more clearfix">
      <span class="left">用户评价</span>
      <span class="right">更多 ></span>
    </div>
    <div class="usermessage">
      <img :src="evaluate[0].user.avatar" alt="">
      <span>{{evaluate[0].user.uname}}</span>
    </div>
    <div class="eva">
      {{evaluate[0].content}}
    </div>
    <div class="buymessage">
      <span>{{ date(evaluate[0].created) }}</span>
      <span>{{ evaluate[0].style }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    evaluate: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    date(buytime) {
      let time = new Date(buytime * 1000);
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      return year + "-" + month + "-" + day;
    },
  },
};
</script>

<style scoped>
.evaluate {
  margin: 0 10px;
  border-top: 5px solid #f3f3f3;
}

.more {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  border-bottom: 2px solid #f3f3f3;
}

.usermessage {
  height: 70px;
  line-height: 70px;
}

.usermessage img {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  vertical-align: middle;
}

.usermessage span {
  margin-left: 8px;
}

.eva {
  font-size: 13px;
}

.buymessage {
  margin-top: 8px;
  font-size: 12px;
}

.buymessage span:first-child {
  margin-right: 8px;
}

</style>