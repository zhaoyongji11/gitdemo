import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/one'
import Two from '@/components/two'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'one',
      component: One
    },
    {
      path: '/two',
      name: 'two',
      component: Two
    }
  ]
})
