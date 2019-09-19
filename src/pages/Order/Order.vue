<template>
  <div>
    <van-nav-bar
  title="个人订单"
   left-arrow
  @click-left="onClickLeft"
/>
    <section class="order" v-if="!userInfo.id">
      <img src="./images/person.png">
      <h3>登录后查看外卖订单</h3>
      <van-button type="primary" to="/login/tologin" >点击登录</van-button>
    </section>


    <div v-else>
      <van-panel v-if="isshow">
   <div class="text">
    送达时间
    <span>14:10</span>
  </div>
 <van-divider />
  <div class="text">{{getorder.infoname}}</div>
  <van-divider />
  <ul >
  <li class="food" v-for="(foods, index) in getorder.foodData" :key="index">
     <span>{{foods.name}}</span>
     <span class="prices">x{{foods.count}}</span>
     
  </li>
  </ul>
  <div class="food">
    <span>总计</span>
<span class="prices">{{getorder.count}}元</span>
  </div>
  <van-divider />
  <div class="text">备注  :
    {{getorder.note}}
  </div>
  <div slot="footer">
    <van-button size="small" @click="clear">确认送达</van-button>
    <van-button size="small" type="danger" @click="clear">申请退款</van-button>
  </div>
</van-panel>
  <div v-else class="alt">暂无订单</div>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar,Button,Divider } from 'vant';
import {mapState} from 'vuex'

Vue.use(NavBar).use(Button).use(Divider);
export default {
  data(){
    return {
      isshow:true
    }
  },
methods:{
    onClickLeft(){
      this.$router.push('/home')
    },
    clear(){
      this.isshow=true
      this.$store.dispatch('clearOrder')
    }
  },
  computed:{
    ...mapState(['userInfo','getorder'])
  },
  mounted(){
    this.isshow=true
    this.$store.dispatch('getOrdermsg')
    var arr=Object.keys(this.getorder)
    if(arr.length==0){
      this.isshow=false;
    }else{ this.isshow=true}
    //console.log(getOrder)
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
.prices{
  float: right;
  color: #999999;
}
.text{
  padding: 10px 16px;
  font-size: 16px;
  margin: 4px 0;
}
.food{
  padding: 10px 16px;
  font-size: 14px;
  margin: 4px 0;
  position: relative;
}

.alt{
  margin-top: 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
}
</style>