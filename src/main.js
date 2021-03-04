import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import store from './store/index'
import FastClick from 'fastclick'
import toast from 'components/common/toast'

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

Vue.use(toast)

FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store

}).$mount('#app')
