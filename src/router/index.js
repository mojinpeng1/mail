import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  // 路由方式
  // mode: 'history', // 没有#
  mode: 'hash', // 有#  默认就是hash
  routes: [
    //  命名视图
    {
      path: '/',
      name: 'GoodList',
      components: {
        default: () => import('../view/GoodList'),
        title: () => import('../view/Title'),
        img: () => import('../view/Image')
      }

    },
    {
      // 动态路由
      path: '/goodsList/:goodsId/user/:name',
      name: 'GoodsList',
      component: () => import('../view/GoodList')
    },
    // 嵌套路由
    {
      path: '/goodsList',
      name: 'GoodsList',
      component: () => import('../view/GoodList'),
      children: [
        {
          path: 'title',
          name: 'title',
          component: () => import('../view/Title')
        },
        {
          path: 'img',
          name: 'img',
          component: () => import('../view/Image')
        }
      ]
    },
    // 动态路由
    {
      path: '/craft',
      name: 'craft',
      component: () => import('../view/Craft')
    },
    // 命名路由  object 对象
    {
      path: 'cart',
      name: 'cart',
      component: () => import('../view/Cart')
    }
    // 命名视图  route-view
  ]
})
