<template>
  <div>
    <van-cell-group>
      <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-button type="primary" size="large" @click="tologin">登录</van-button>
  </div>
</template>

<script>
import Vue from "vue";
import { Field, CellGroup } from "vant";

Vue.use(Field).use(CellGroup);
export default {
  data() {
    return {
      username: "",
      password: "",
      code: ""
    };
  },
  components: {},
  methods: {
    tologin() {
      this.$axios
        .post("http://localhost:4000/authlog", { name: this.username })
        .then(res => {
          this.$store.dispatch("recordUser", { name: this.username, id: 1 });
          this.$router.replace("/profile");
        });
    }
  }
};
</script>

<style>
</style>