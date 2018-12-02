import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true,
      meta: {
        pageHeading: 'Home',
        pageSubtitle: 'Home Dome Some...'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      props: true,
      meta: {
        pageHeading: 'About',
        pageSubtitle: 'About Trout Snout...'
      }

    }, 
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue'),
      props: true,
      meta: {
        pageHeading: 'Contact',
        pageSubtitle: 'Contact Flakt Bakt...'
      }

    }
    
  ]

})

export default router


