<template>
  <div id="app">

    <router-view/>
    <footer-guide v-show="$route.meta.foot"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {mapActions} from 'vuex'

export default {
  components:{
    FooterGuide,
  },mounted(){
    this.$store.dispatch('getAddress')
    this.getUserInfo()
  },
  methods:{
    ...mapActions(['getUserInfo'])
  }
}
</script>

<style>

</style>
