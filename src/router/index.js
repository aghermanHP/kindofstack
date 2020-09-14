import Vue from 'vue'
import VueRouter from 'vue-router'
import QuestionList from '../views/QuestionsList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'QuestionList',
    component: QuestionList
  },
  {
    path: '/question/:id',
    name: 'Question',
    component: () => import(/* webpackChunkName: "about" */ '../views/Question.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue')
  },
  {
    path: '/tags',
    name: 'tags',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tags.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
