import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "group-1" */ '../views/Home/Home.vue'),
    meta: { 
      title: '主页'
    }
  },
  {
    path: '/cart',
    component: () => import(/* webpackChunkName: "group-1" */ '../views/Cart/Cart.vue'),
    meta: { 
      title: '购物车'
    }
  },
  {
    path: '/menu',
    component: () => import(/* webpackChunkName: "group-1" */ '../views/Menu/Menu.vue'),
    meta: { 
      title: '菜单'
    }
  },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "group-1" */ '../views/User/User.vue'),
    meta: { 
      title: '用户'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
