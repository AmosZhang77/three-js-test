import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/example1',
      name: 'example1',
      component: () => import('./views/example1.vue'),
      meta: {
        moduleName: 'example1'
      }
    },
    {
      path: '/example2',
      name: 'example2',
      component: () => import('./views/example2.vue'),
      meta: {
        moduleName: 'example2'
      }
    },
    {
      path: '/example3',
      name: 'example3',
      component: () => import('./views/example3.vue'),
      meta: {
        moduleName: 'example3'
      }
    },
    {
      path: '/example4',
      name: 'example4',
      component: () => import('./views/example4.vue'),
      meta: {
        moduleName: 'example4'
      }
    },
    {
      path: '/example5',
      name: 'example5',
      component: () => import('./views/example5.vue'),
      meta: {
        moduleName: 'example5'
      }
    },
  ]
})
