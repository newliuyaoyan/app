<template>
  <div>
   <van-nav-bar
  title="订单确认"
  left-arrow
  @click-left="onClickLeft"
/>
<van-panel :title=userInfo.phone :desc=address.address >
  <div class="text">
    送达时间
    <span>14:10</span>
  </div>
 <van-divider />
  <div class="text">{{info.name}}</div>
  <van-divider />
  <ul >
  <li class="food" v-for="(foods, index) in cartFoods" :key="index">
     <span>{{foods.name}}</span>
     <span class="num">x{{foods.count}}</span>
     <span class="prices">{{foods.price}}元</span>
  </li>
  </ul>
  <div class="food">
     <span >配送费</span>
     <span class="prices">{{info.deliveryPrice}}元</span>
  </div>
  <div class="food">
    <span>总计</span>
<span class="prices">{{totalPrice+info.deliveryPrice}}元</span>
  </div>
  <van-divider />
  <div class="text">备注  :
    <input type="text" class="input" v-model="req">
  </div>
 <van-button type="primary" size="large" @click="topay">支付</van-button>
   </van-panel>

</div>
</template>

<script>
import Vue from 'vue';
import { MessageBox } from 'mint-ui';
Vue.component(MessageBox);
import { NavBar,Panel,Button,Divider} from 'vant';
import {mapState,mapGetters} from 'vuex'
import '../../../node_modules/mint-ui/lib/style.css'

Vue.use(NavBar).use(Panel).use(Button).use(Divider);
export default {
  data(){
    return {
      allprice:'',
      req:'',
       data :{}
    }
  },
   methods:{
     onClickLeft(){
       this.$router.back();
     },
     topay(){
       const {totalPrice} = this
       const {deliveryPrice} = this.info
       var foodData=[]
       this.allprice=totalPrice+deliveryPrice;
       for(let i=0;i<this.cartFoods.length;i++){
         foodData[i]={}
         foodData[i].name=this.cartFoods[i].name
         foodData[i].count=this.cartFoods[i].count
        
       }
       this.data={infoname:this.info.name,count:this.allprice,foodData:foodData,note:this.req}
       console.log(this.req)
       console.log(this.data)
       this.$axios.post('http://localhost:4000/topay',{data:this.data}).then(res=>{
         if(res){
           //console.log(res)
            MessageBox.confirm(res.data).then(action => {
              this.$store.dispatch('clearCart')
          this.$router.push('/order')
        }, () => {});
         }
       }).catch(err=>{
         alert(err)
       })
       
     }
   },
   computed:{
     ...mapState(['userInfo','address','cartFoods','info']),
     ...mapGetters(['totalPrice'])
   },
   
}
</script>

<style>
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
.num{
 position: absolute;
 color: #999999;
 right: 30%;
}
.prices{
  float: right;
  color: #999999;
}
.input{
  border: none;
  width: 70%;
}
</style>