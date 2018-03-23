import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Touch from '@/components/Touch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/touch',
      name: 'Touch',
      component: Touch
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
