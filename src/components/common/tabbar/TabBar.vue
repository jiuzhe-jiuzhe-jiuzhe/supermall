<template>
<!-- 有div了就不要在外面包一层div了，不然flex属性会不起作用 -->
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBar",
};
</script>
<style>
/* 引用base.css代码 */

#tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}

</style>