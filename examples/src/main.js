import Vue from 'Vue'
import App from './App.vue'
import routes from '@/router'
import VueRouter from 'vue-router';
import ZVue from '../../src/index'
Vue.use(ZVue)
Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

window.vue = new Vue({
  router: router,
  el: '#app',
  render: h => h(App),
})
