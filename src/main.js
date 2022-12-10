import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
//new Vue(App).$mount('#app')

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
