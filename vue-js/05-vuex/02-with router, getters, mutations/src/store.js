import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    a: 0,
    b: 0
  },
  getters: { //readonly
    a: state => state.a,
    b: state => state.b,
    sum: state => {
      return parseInt(state.a) + parseInt(state.b);
    }
  },
  mutations: { //writeonly
    updateA(state, m) {
      state.a = m;
    },
    updateB(state, m) {
      state.b = m;
    }
  }
});
