import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Food from '../pages/Home/food/Food.vue'
import Log from '../pages/Profile/Log.vue'
import tologin from '../pages/Profile/log/tologin.vue'
import toregister from '../pages/Profile/log/toregister.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

Vue.use(VueRouter)


export default new VueRouter({
  //所有路由
  routes:[
    {
       path:'/login',
       component:Log, children:[
        {path:'tologin' ,component:tologin},
        {path:'toregister' ,component:toregister}
      ]
    },
    {
      path:'/home',
      component:Home,
      meta:{
        foot:true
      }
    },
    {
      path:'/order',
      component: Order,
      meta:{
        foot:true
      }
    },
    {
      path:'/food',
      component:Food,
      meta:{
        foot:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        foot:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        foot:true
      }
    },
    {
      path:'/shop',
      component:Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

