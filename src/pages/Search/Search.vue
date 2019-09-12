<template>
  <form action="/">
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
  data(){
    return {
      value:''
    }
  },
   methods:{
     onSearch(){

     },
     onCancel(){
       this.value=''
     }
   }
}
</script>

<style>

</style>