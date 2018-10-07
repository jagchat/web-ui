import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router' //import router library
Vue.use(VueRouter); //enable Vue Router in Vue instance

import Vuex from 'vuex' //importing vuex
Vue.use(Vuex); //enable vuex

import {
  routes
} from './routes' //import all routes defined in this file

import {
  store
} from './store' //import store to be used in all components and in app

//pass all routes to router
const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  store, //register store (accessible through out app and all components automatically using 'this.$store')
  router, //register routes for the Vue instance
  render: h => h(App)
})
