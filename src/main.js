import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { Field } from 'vant';
import axios from 'axios';
import store from './store'
Vue.prototype.$axios = axios;
Vue.use(Field);

new Vue({
  el:'#app',
  render: h => h(App),
  router,//使用vue-router
  store,//使用vuex
}).$mount('#app')

Vue.config.productionTip = true
