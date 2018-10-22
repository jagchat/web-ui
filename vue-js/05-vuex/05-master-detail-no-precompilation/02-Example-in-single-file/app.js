var app = {};
app.Vue = Vue;
app.VueRouter = VueRouter;
app.Vue.use(app.VueRouter);
app.Vuex = Vuex;
app.Vue.use(app.Vuex);
app.components = {};

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

app.api = {
    getEmployeesAsync: function () {
        app.store.commit("DATA_PENDING");
        return jQuery.get({
            url: 'http://localhost:8000/api/Employees',
            cache: false
        }).done(function (data) {
            app.store.commit("DATA_SUCCESS");
            return data;
        }).fail(function (xhr) {
            app.store.commit("DATA_FAILURE");
            console.error(xhr);
        }).always(function () {});
    },

    getEmployeeAsync: function (empno) {
        app.store.commit("DATA_PENDING");
        return jQuery.get({
            url: 'http://localhost:8000/api/Employees/' + empno,
            cache: false
        }).done(function (data) {
            app.store.commit("DATA_SUCCESS");
            return data;
        }).fail(function (xhr) {
            app.store.commit("DATA_FAILURE");
            console.error(xhr);
        }).always(function () {});
    }

};

(function () {

    var componentDef = {
        name: "Header",
        template: '#header-template'
    };

    var component = app.Vue.component(componentDef.name, componentDef);

    app.components[componentDef.name] = component;

})(app);

(function () {

    var componentDef = {
        name: "EmpList",
        template: '#emp-list-template',
        data: function () {
            return {
                data: null
            };
        },
        created: function () {
            this.refresh();
        },
        computed: {
            PENDING: function () {
                return this.$store.getters.PENDING;
            },
            FAILURE: function () {
                return this.$store.getters.FAILURE;
            },
            DATA_ERROR: function () {
                return this.$store.getters.DATA_ERROR;
            },
        },
        methods: {
            refresh: function () {
                var self = this;
                self.data = null;
                app.api.getEmployeesAsync().done(function (resp) {
                    self.data = resp;
                });
            }
        }
    };

    var component = app.Vue.component(componentDef.name, componentDef);

    app.components[componentDef.name] = component;

})(app);

(function () {

    var componentDef = {
        name: "EmpDetail",
        template: '#emp-detail-template',
        data: function () {
            var self = this;
            return {
                empno: self.$route.params.empno,
                data: null
            };
        },
        created: function () {
            this.refresh();
        },
        computed: {
            PENDING: function () {
                return this.$store.getters.PENDING;
            },
            FAILURE: function () {
                return this.$store.getters.FAILURE;
            },
            DATA_ERROR: function () {
                return this.$store.getters.DATA_ERROR;
            }
        },
        methods: {
            goBack: function () {
                this.$router.back();
            },
            refresh: function () {
                var self = this;
                app.api.getEmployeeAsync(self.empno).done(function (resp) {
                    self.data = resp[0];
                });
            }
        }
    };

    var component = app.Vue.component(componentDef.name, componentDef);

    app.components[componentDef.name] = component;

})(app);

(function () {

    var componentDef = {
        name: "Root",
        template: '#root-template'
    };

    var component = app.Vue.component(componentDef.name, componentDef);

    app.components[componentDef.name] = component;

})(app);

(function () {
    var _routes = [{
            path: '',
            redirect: '/List'
        },
        {
            path: '/List',
            component: app.components.EmpList,
            name: 'EmpList'
        }, {
            path: '/Detail/:empno',
            component: app.components.EmpDetail,
            name: 'EmpDetail'
        }, {
            path: '*',
            redirect: '/'
        }
    ]

    app.router = new app.VueRouter({
        routes: _routes
    });

})(app);