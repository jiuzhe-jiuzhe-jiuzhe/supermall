<template>
  <div class="goodsparam" v-if="Object.keys(params).length !== 0">
    <table class="first">
      <tr v-for="(item, index) in params.rule.tables[0]" :key="index">
        <td v-for="(i, idx) in item" :key="idx">{{i}}</td>
      </tr>
    </table>
    <table class="second">
      <tr v-for="(item, i) in params.info.set" :key="i">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.first {
  width: 100%;
  margin: 10px 10px 0 10px;
  border-collapse: collapse;
}

.first tr {
  display: flex;
  width: 100%;
  height: 42px;
  line-height: 42px;
  font-size: 12px;
  border-bottom: 2px solid #f3f3f3;
}

.first tr td {
  flex: 1;
}

.second {
  margin-left: 10px;
  margin-right: 10px;
  border-collapse: collapse;
}

.second tr {
  display: inline-block;
  width: 100%;
  height: 60px;
  font-size: 12px;
  border-top: 2px solid #f3f3f3;
  border-bottom: 2px solid #f3f3f3;
}

.second tr td:first-child {
  width: 40px;
  line-height: 42px;
}



</style>