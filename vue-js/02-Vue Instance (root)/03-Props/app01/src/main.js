import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App :msg="msg"></App>',
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    }
  },
})
