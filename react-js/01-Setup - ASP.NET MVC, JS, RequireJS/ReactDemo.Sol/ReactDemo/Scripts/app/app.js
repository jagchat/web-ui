define('app', function (require) {
    var React = require('react'),
        ReactDOM = require('ReactDOM');

    return function () {

        var App = React.createClass({
            displayName: 'App',

            render: function () {
                var s = "Hello World!";
                return React.createElement(
                    'div',
                    null,
                    s
                );
            }
        });

        ReactDOM.render(React.createElement(App, null), document.getElementById("app-container"));
    };
});
//# sourceMappingURL=app.js.map
