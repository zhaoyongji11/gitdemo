import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/one'
import Two from '@/components/two'
import Three from '@/components/three'
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
    },
    {
      path: '/three',
      name: 'three',
      component: Three
    }
  ]
})
