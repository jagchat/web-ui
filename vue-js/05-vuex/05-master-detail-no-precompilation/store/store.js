(function () {
    var store = new app.Vuex.Store({
        state: {
            PENDING: false,
            FAILURE: null,
            DATA_ERROR: null
        },
        getters: {
            PENDING: function (state) {
                return state.PENDING;
            },
            FAILURE: function (state) {
                return state.FAILURE;
            },
            DATA_ERROR: function (state) {
                return state.DATA_ERROR;
            },
        },
        mutations: {
            DATA_PENDING: function (state) {
                state.PENDING = true;
                state.FAILURE = false;
            },
            DATA_SUCCESS: function (state, m) {
                state.PENDING = false;
                state.FAILURE = false;
            },
            DATA_FAILURE: function (state, m) {
                state.PENDING = false;
                state.DATA_ERROR = m;
                state.FAILURE = true;
            }
        }
    });
    app.store = store;
})(app);