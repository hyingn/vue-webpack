import Vue from 'vue'
import Router from 'vue-router'
import Index from './view/Index.vue'
import About from './view/About.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})
