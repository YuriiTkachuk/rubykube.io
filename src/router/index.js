import Vue from 'vue'
import Router from 'vue-router'
import $ from 'jquery'
import Services from '@/views/Services'
window.jQuery = window.$ = $

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
    },
    {
      path: '/blog',
      name: 'Blog',
      component: {
        template: require('@/views/blog.html')
      }
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/blogpost',
      name: 'blogpost',
      component: {
        template: require('@/views/blogpost.html')
      }
    },
    {
      path: '/project',
      name: 'Project',
      component: {
        template: require('@/views/agency-project.html')
      }
    }
  ]
})
