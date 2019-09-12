<template>
<div>
  
  <van-nav-bar
  :title="address.address"
  :right-text= "userInfo.id? this.title2:this.title1"
  @click-right="onClickRight"
  
/>
<van-grid :border="false" :column-num="3">
  <van-grid-item
    icon="photo-o"
    text="美食"
    to = '/food'
  >  
  </van-grid-item>
  <van-grid-item
  icon="photo-o"
    text="甜点"
    to = '/food'>  
  </van-grid-item>
  <van-grid-item
  icon="photo-o"
    text="生鲜"
    to = '/food'>
  </van-grid-item>
  <van-grid-item
  icon="photo-o"
    text="饮品"
    to = '/food'>
  </van-grid-item>
   <van-grid-item
  icon="photo-o"
    text="超市"
    to = '/food'>
  </van-grid-item>
   <van-grid-item
  icon="photo-o"
    text="药品"
    to = '/food'>
  </van-grid-item>
</van-grid>
<van-divider content-position="left">附近商家</van-divider>
<food-list> </food-list>
</div>
</template>

<script>
import Vue from 'vue';
import {mapState} from 'vuex'
import FoodList from '../../components/foodlist/FoodList.vue'
import { NavBar,Grid, GridItem,Divider,Card  } from 'vant';

Vue.use(NavBar).use(Grid).use(GridItem).use(Divider).use(Card);
export default {
   data(){
     return{
      title2:'个人主页',
      title1:'登录/注册'     
     }
   },
   methods:{
     onClickRight(){
       if(this.userInfo.id) {
         this.$router.push('/userInfo')
       }else{
         this.$router.push('/login/tologin')
       }
     }
   },
   components:{
     FoodList,
   },
   computed:{
     ...mapState(['address','userInfo'])
   },
   mounted(){
     this.$store.dispatch('getShops')
     
   }
 }


</script>

<style>

</style>