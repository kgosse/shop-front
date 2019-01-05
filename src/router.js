import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

/* Layout */
import Layout from './views/layout/Layout'

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [{
        path: '',
        component: () => import('@/views/Home')
      }]
    },
  ]
})
