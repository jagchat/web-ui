(function () {

    var componentDef = {
        name: "EmpList",
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

    var component = app.Vue.component(componentDef.name, function (resolve, reject) {
        jQuery.get({
            url: 'components/EmployeeList/EmployeeList.html'
        }).done(function (data) {
            componentDef.template = data;
            resolve(componentDef);
        }).fail(function (xhr) {
            console.error(xhr);
        }).always(function () {});
    });

    app.components[componentDef.name] = component;

})(app);