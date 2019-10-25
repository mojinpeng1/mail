// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
// 图片懒加载组件
Vue.use(VueLazyLoad, {
  loading: '/static/loading-svg/loading-bars.svg' // 懒加载的图片
})

/* eslint-disable no-new */
new Vue({
  el: '#app', // 监听区域
  router,
  components: { App },
  template: '<App/>'
})
