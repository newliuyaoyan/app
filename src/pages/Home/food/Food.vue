<template>
    <van-nav-bar
  title="美食"
  left-arrow
  @click-left="onClickLeft"
/>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
export default {
  methods:{
    onClickLeft(){
      history.back();
    }
  }
}
</script>

<style>

</style>