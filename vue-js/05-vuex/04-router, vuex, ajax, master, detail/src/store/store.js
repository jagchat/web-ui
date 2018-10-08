import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    PENDING: false,
    FAILURE: null,
    DATA_ERROR: null
  },
  getters: {
    PENDING: state => state.PENDING,
    FAILURE: state => state.FAILURE,
    DATA_ERROR: state => state.DATA_ERROR
  },
  mutations: {
    DATA_PENDING(state) {
      state.PENDING = true;
      state.FAILURE = false;
    },
    DATA_SUCCESS(state, m) {
      state.PENDING = false;
      state.FAILURE = false;
    },
    DATA_FAILURE(state, m) {
      state.PENDING = false;
      state.DATA_ERROR = m;
      state.FAILURE = true;
    }
  }
});
