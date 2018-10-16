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