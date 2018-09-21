import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Question from './Question.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: App,
  	children: [
      {path: '/:question', name: 'single-question', component: Question},  		
  	]
  }
]

const router = new VueRouter({
  routes // short for routes: routes
})

const bus = new Vue()
Vue.prototype.$bus = bus

const app = new Vue({
  router
}).$mount('#app')
