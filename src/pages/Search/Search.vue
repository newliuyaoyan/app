<template>
<div>
   <van-nav-bar
  title="搜索"
   left-arrow
  @click-left="onClickLeft"
/>

  <form action="/">
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
</div>
</template>

<script>
import Vue from 'vue';
import { Search,NavBar } from 'vant';

Vue.use(Search).use(NavBar);
export default {
  data(){
    return {
      value:''
    }
  },
   methods:{
     onSearch(){
      const keyword=this.value.trim();
      if(keyword){
        this.$store.dispatch('searchShops')
      }
     },
     onCancel(){
       this.value=''
     },onClickLeft(){
      history.back();
    }
   }
}
</script>

<style>

</style>