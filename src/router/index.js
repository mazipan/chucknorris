import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'
import Categories from '../pages/Categories.vue'
import CategoryJokes from '../pages/CategoryJokes.vue'
import Search from '../pages/Search.vue'
import SearchDetail from '../pages/SearchDetail.vue'
import About from '../pages/About.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/category/jokes',
      name: 'CategoryJokes',
      component: CategoryJokes
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/search/detail',
      name: 'SearchDetail',
      component: SearchDetail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

export default router
