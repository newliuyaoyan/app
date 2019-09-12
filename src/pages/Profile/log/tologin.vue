<template>
  <div>
    <van-cell-group>
      <van-field v-model="phone" center clearable label="手机号码" placeholder ></van-field>
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码" >
        <van-button
          slot="button"
          size="small"
          type="primary"
          :disabled="!rightphone"
          @click="getcode"
        >{{time>0?`已发送(${time}s)`:'发送验证码'}}</van-button>
      </van-field>
    </van-cell-group>
    <van-button type="primary" @click="tologin" size="large">
  登录
</van-button>

<van-popup v-model="show">
  <div class="showerr">
    <h3>您的验证码错误</h3>
    <van-button type="primary" @click="back">返回</van-button>
  </div>
</van-popup>
  </div>
</template>

<script>
import Vue from "vue";
//import Qs from 'qs'
import { Field,Popup,Button} from "vant";

Vue.use(Field).use(Popup).use(Button);

export default {
  data() {
    return {
      show:false,
      phone: "",
      sms: "",
      time: 0 //计时时间
    };
  },
  methods: {
    getcode() {
      if (!this.time) {
        //启动倒计时
        this.time = 30;
        const intervalid = setInterval(() => {
          this.time--;
          if (this.time <= 0) {
            clearInterval(intervalid);
          }
        }, 1000);
        //发送ajax请求 get
        
        this.$axios({
          method:'get',
          url:'http://localhost:4000/auth',
          params:{
            phoneNum:this.phone,

          }
        }).then((response)=>{
          this.sms=response.data;
          //console.log(response);
        }).catch((err)=>{
          alert(err)
        })
        
    

      }
    },
    //点击登录实现页面跳转
    tologin(){
          //post
        this.$axios.post('http://localhost:4000/authlog',{phoneNum:this.phone,code:this.sms}).then((res)=>{
          if(res.data=='right'){
            var user={
              userPhone:this.phone,
              id:1
            }
            this.$store.dispatch('recordUser',user)
            this.$router.replace('/profile')
          }else{
            this.show=true;
          }
        }).catch((err)=>{
          alert(err)
        })
    },
    back(){
      this.show=false;
      this.sms=''
    }
  },
  computed: {
    rightphone() {
      return /^1\d{10}$/.test(this.phone);
    }
  }
};
</script>

<style >
.showerr{
  height: 200px;
    width: 250px;
    text-align: center;
    line-height: 50px;

}
</style>
