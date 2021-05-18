import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '../layout/Layout'

const routes = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    meta: {
      title: 'AdminTemplate',
      icon: 'el-icon-s-marketing'
    },
    children: [
      {
        path: '',
        name: 'principalMain',
        component: () => import('@/views/Index'),
        meta: { title: '全部', icon: 'el-icon-coordinate', requireAuth: true }
      },
      {
        path: 'new',
        name: 'principalNew',
        component: () => import('@/views/Index'),
        meta: { title: '新建', icon: 'el-icon-circle-plus', requireAuth: true }
      }
    ]
  },
  {
    path: '/demo',
    component: Layout,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/views/Index'),
        meta: { title: 'AdminTemplate-2', icon: 'el-icon-s-marketing', requireAuth: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: '',
        name: 'usermanage',
        component: () => import('@/views/UserAccount/list'),
        meta: { title: '用户管理', icon: 'el-icon-user-solid', requireAuth: true }
      }
    ]
  },
  {
    path: '/account',
    component: Layout,
    meta: {
      title: '管理员账户管理',
      icon: 'el-icon-s-custom'
    },
    adminpage: true, 
    children: [
      {
        path: '',
        name: 'accountIndex',
        component: () => import('@/views/AdminAccount/list.vue'),
        meta: { title: '全部管理员账户', icon: 'el-icon-s-data', requireAuth: true }
      },
      {
        path: 'add',
        name: 'accountAdd',
        component: () => import('@/views/AdminAccount/add.vue'),
        meta: { title: '新增管理员账户', icon: 'el-icon-circle-plus', requireAuth: true }
      }
    ]
  },
  {
    path: '/edit/my/account',
    component: Layout,
    children: [
      {
        path: '',
        name: 'EditMyAccount',
        component: () => import('@/views/EditMyAccount'),
        meta: { title: '个人设置', icon: 'el-icon-thumb', requireAuth: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/Login/'),
    meta: { title: '登录你的账户', icon: 'el-icon-thumb', requireAuth: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}