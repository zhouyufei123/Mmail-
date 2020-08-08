import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/user/login.vue'
import Sy from '@/components/Sy/sy.vue'
import Good from '@/components/Good/sy.vue'
import Plgl from '@/components/Good/plgl.vue'
import Spgl from '@/components/Good/spgl.vue'
import User from '@/components/user/user.vue'


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
      component:Sy,
      children:[
        {
          path:'good',
          component:Good
        },
        {
          path:'plgl',
          component:Plgl
        },
        {
          path:'/404',
          component:()=>import ('@/components/user/404.vue'),
          meta:{title:'404'}
        },
        {
          path:'spgl',
          component:Spgl
        },
        {
          path:'user',
          component:User
        },
        {
          path:'/sy',
          redirect:'/sy/good'
        }
      ]
    }
  ]
})
