(function () {

    var componentDef = {
        name: "Root"
    };

    var component = app.Vue.component(componentDef.name, function (resolve, reject) {
        jQuery.get({
            url: 'components/Root/Root.html'
        }).done(function (data) {
            componentDef.template = data;
            resolve(componentDef);
        }).fail(function (xhr) {
            console.error(xhr);
        }).always(function () {});
    });

    app.components[componentDef.name] = component;

})(app);