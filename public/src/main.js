import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import PickMode from './PickMode.vue'

import Results from './Results.vue'
import Train from './Train.vue'
import Question from './Question.vue'
import Questions from './Questions.vue'

Vue.use(VueRouter)

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

const routes = [
  { path: '/', component: App,
  	children: [
      {path: '/', name:'mode', component: PickMode},
      {path: '/questions/', name: 'questions', component: Questions,
        children: [
          {path: '/questions/:question', name: 'single-question', component: Question}
        ]
      },  		
      {path: '/results', name:'results', component: Results},
      {path: '/train', name:'train', component: Train}
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
