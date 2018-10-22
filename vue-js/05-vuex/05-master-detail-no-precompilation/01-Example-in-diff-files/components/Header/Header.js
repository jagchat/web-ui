(function () {

    var componentDef = {
        name: "Header"
    };

    var component = app.Vue.component(componentDef.name, function (resolve, reject) {
        jQuery.get({
            url: 'components/Header/Header.html'
        }).done(function (data) {
            componentDef.template = data;
            resolve(componentDef);
        }).fail(function (xhr) {
            console.error(xhr);
        }).always(function () {});
    });

    app.components[componentDef.name] = component;

})(app);