import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Borrow from './views/Borrow.vue'
import List from './views/List.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/borrow',
    name: 'Borrow',
    component: Borrow
  }, {
    path: '/list',
    name: 'List',
    component: List
  }]
})