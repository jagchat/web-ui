import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' //import router library
import {
  routes
} from './routes' //import all routes defined in this file

Vue.use(VueRouter); //enable Vue Router in Vue instance

//pass all routes to router
const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router, //register routes for the Vue instance
  render: h => h(App)
})
