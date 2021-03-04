<template>
  <div class="recommends">
    <ul>
      <li v-for="(item, index) in recommendImgs" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <span>{{item.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommendImgs',
  props: {
    recommendImgs: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style>
.recommends ul {
  display: flex;
  width: 100%;
  margin-top: 15px;
  padding-bottom: 30px;
  list-style: none;
  font-size: 12px;
  text-align: center;
  border-bottom: 18px solid #eee;
}

.recommends ul li {
  flex: 1;
}
.recommends ul li img {
  width: 65px;
  height: 65px;
}
.recommends ul li span{ 
  display: block;
}
</style>