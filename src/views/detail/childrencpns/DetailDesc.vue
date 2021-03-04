<template>
  <div class="desc" >
    <div class="topline"></div>
    <p>{{desc}}</p>
    <div class="bottomline"></div>
  </div>
</template>

<script>
export default {
  props: {
    desc: {
      type:String,
      default: ''
    }
  }
}
</script>

<style scoped>
.desc {
  position: relative;
}

.topline {
  width: 80px;
  height: 7px;
  margin-top: 10px;
  margin-left: 10px;
  border-left: 7px solid #000;
  border-bottom: 2px solid gray;
}

p {
  margin: 20px 10px;
  font-size: 13px;
}

.bottomline {
  position: absolute;
  right: 10px;
  width: 80px;
  height: 7px;
  margin-right: 10px;
  border-right: 7px solid #000;
  border-bottom: 2px solid gray;
}

.desc span {
  display: inline-block;
  margin-top: 20px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 700;
}
</style>