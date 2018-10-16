(function () {

    var componentDef = {
        name: "EmpDetail",
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

    var component = app.Vue.component(componentDef.name, function (resolve, reject) {
        jQuery.get({
            url: 'components/EmployeeDetail/EmployeeDetail.html'
        }).done(function (data) {
            componentDef.template = data;
            resolve(componentDef);
        }).fail(function (xhr) {
            console.error(xhr);
        }).always(function () {});
    });

    app.components[componentDef.name] = component;

})(app);