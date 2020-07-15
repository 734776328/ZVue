import Vue from 'Vue'
import App from './App.vue'
new Vue({
  el: '#app',
  render (h) {
    return h => h(App)
  }
})