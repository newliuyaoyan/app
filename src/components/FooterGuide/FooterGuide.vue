<template>
<div>
  
  <van-tabbar route >
  <van-tabbar-item replace  icon="home-o" to="/home" >外卖</van-tabbar-item>
  <van-tabbar-item replace  icon="friends-o" to="/order">订单</van-tabbar-item>
  <van-tabbar-item replace  icon="search"  to="/search">搜索</van-tabbar-item>
  <van-tabbar-item replace  icon="setting-o"  to="/profile" >我的</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
export default {
data() {
    return {
      
    }
  }, 
 
  
}

</script>

<style>

</style>