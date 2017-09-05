import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: {
        template: require('@/views/home.html')
      }
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: {
        template: require('@/views/about-us.html')
      }
    },
    {
      path: '/careers',
      name: 'Careers',
      component: {
        template: require('@/views/careers.html')
      }
    }
  ]
})
