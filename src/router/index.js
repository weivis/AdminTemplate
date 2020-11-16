import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '../layout/Layout'

const routes = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/components',
  //   hidden: true,
  //   name: 'home',
  // },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/views/index/home.vue'),
        meta: {title:'汇总', icon: 'el-icon-s-marketing'}
      }
    ]
  },
  {
    path: '/subject',
    component: Layout,
    meta: {
      title: '使用主体',
      icon: 'el-icon-s-grid'
    },
    children: [
      {
        path: '',
        name: 'subjectmain',
        component: () => import('@/views/index/home.vue'),
        meta: {title:'全部', icon:'el-icon-coordinate'}
      },
      {
        path: 'new',
        name: 'subjectnew',
        component: () => import('@/views/index/home.vue'),
        meta: {title:'新建', icon:'el-icon-circle-plus'}
      }
    ]
  },
  {
    path: '/gateway',
    component: Layout,
    children: [
      {
        path: '',
        name: 'gateway',
        component: () => import('@/views/index/home.vue'),
        meta: {title:'网关', icon: 'el-icon-s-help'},
      }
    ]
  },{
    path: '/equipment',
    component: Layout,
    children: [
      {
        path: '',
        name: 'equipment',
        component: () => import('@/views/index/home.vue'),
        meta: {title:'设备', icon: 'el-icon-share'}
      }
    ]
  },
  {
    path: '/account',
    component: Layout,
    meta: {
      title: '账户',
      icon: 'el-icon-s-custom'
    },
    children: [
      {
        path: '',
        name: 'accountMy',
        component: () => import('@/views/index/home.vue'),
        meta: {title:'账户设置', icon: 'el-icon-user-solid'}
      },
      {
        path: 'edit',
        name: 'accountKey',
        component: () => import('@/views/index/home.vue'),
        meta: {title:'SecretKey', icon: 'el-icon-upload'}
      }
    ]
  },
  // {
  //   path: '/components',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/componentsdata/list.vue'),
  //       meta: {title:'组件'}
  //     }
  //   ]
  // },
  // {
  //   path: '/cache',
  //   component: Layout,
  //   // hidden: true,
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/cache/list.vue'),
  //       meta: {title:'内容缓存'}
  //     }
  //   ]
  // },
  // {
  //   path: '/article',
  //   component: Layout,
  //   meta: {
  //     title: '文章',
  //     icon: 'el-icon-star-on'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       name: 'all',
  //       component: () => import('@/views/article/list.vue'),
  //       meta: {title:'所有'}
  //     },
  //     {
  //       path: 'edit',
  //       name: 'edit',
  //       component: () => import('@/views/article/edit.vue'),
  //       meta: {title:'新增和编辑'}
  //     }
  //   ]
  // },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: 'admin',
  routes
})

export default router