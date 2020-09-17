import Vue from 'vue'
import VueRouter from 'vue-router'
import QuestionsList from '../views/QuestionsList.vue'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/questionsList',
        name: 'questionsList',
        component: QuestionsList
      },
      {
        path: '/question/:id',
        name: 'questionDetails',
        component: () => import(/* webpackChunkName: "questions" */ '../views/Question.vue')
      },
      {
        path: '/users',
        name: 'usersList',
        component: () => import(/* webpackChunkName: "user" */ '../views/Users.vue')
      },
      {
        path: '/tags',
        name: 'tagsList',
        component: () => import(/* webpackChunkName: "tags" */ '../views/Tags.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
