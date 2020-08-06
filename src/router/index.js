import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/user/login.vue'
import Sy from '@/components/Sy/sy.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/sy',
      name:"sy",
      component:Sy
    }
  ]
})
