import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component:()=>import("@/views/index"),
    redirect:'/shou',
    children:[
      {
        path: '/shou',
        component:()=>import("@/views/index/shou"),
      },
      {
        path: '/ke',
        component:()=>import("@/views/index/ke"),
      },
      {
        path: '/tu',
        component:()=>import("@/views/index/tu"),
      },
      {
        path: '/zi',
        component:()=>import("@/views/index/zi"),
      },
      {
        path: '/wode',
        component:()=>import("@/views/index/wode"),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component:()=>import('@/views/login')
  },
  {
    path: '/she',
    name: 'she',
    component:()=>import('@/views/index/she')
  },
  {
    path: '/shezhi',
    name: 'shezhi',
    component:()=>import('@/views/index/shezhi')
  },
  {
    path: '/qian',
    name: 'qian',
    component:()=>import('@/views/index/qian')
  },
  {
    path: '/xiang/:id',
    name: 'xiang',
    component:()=>import('@/views/index/xiang')
  },
  {
    path: '/zixiang/:id',
    name: 'zixiang',
    component:()=>import('@/views/index/zixiang')
  },
  {
    path: '/xiang_x/:id',
    name: 'xiang_x',
    component:()=>import('@/views/index/xiang_x')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
