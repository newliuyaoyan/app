import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { Field } from 'vant';
import axios from 'axios';
import store from './store';
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import './mock/mockServer'//加载mock
import './filters' // 加载过滤器
import loading from './common/imgs/loading.gif'

Vue.prototype.$axios = axios;
Vue.use(Field);
// 注册全局组件标签
Vue.component(Button.name, Button)  // <mt-button>
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

new Vue({
  el:'#app',
  render: h => h(App),
  router,//使用vue-router
  store,//使用vuex
}).$mount('#app')

Vue.config.productionTip = true
