<template>
  <div>
    <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" />
    <div id="chosse">
      <a href="#/login/tologin" :class="{on:loginway}" @click="loginway=true">短信登录</a>
      <span id="mil">|</span>
      <a href="#/login/toregister" :class="{on:!loginway}" @click="loginway=false">密码登录</a>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);

export default {
  methods: {
    onClickLeft() {
      location.hash='#/profile'
    }
  },data(){
    return{
      loginway:true,//ture 代表短信登录
    }
  }
};
</script>

<style>
#chosse{
  line-height: 40px;
  text-align: center;
}
#mil{
  margin: 10px;
}
.on{
  color: aquamarine;
}
</style>