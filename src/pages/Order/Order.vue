<template>
  <div>
    <van-nav-bar
  title="个人订单"
   left-arrow
  @click-left="onClickLeft"
/>
    <section class="order">
      <img src="./images/person.png">
      <h3>登录后查看外卖订单</h3>
      <van-button type="primary" to="/login/tologin">点击登录</van-button>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar,Button } from 'vant';

Vue.use(NavBar).use(Button);
export default {
methods:{
    onClickLeft(){
      history.back();
    }
  }
}
</script>

<style>
.order img{
   display: block;
        width: 100%;
        height: 30%;
}
.order{
   padding-top :40px;
      width :60%;
      margin: 0 auto;
      text-align: center;
}
</style>