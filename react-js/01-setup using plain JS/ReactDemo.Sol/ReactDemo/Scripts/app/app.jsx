define('app', function (require) {
    var React = require('react'),
        ReactDOM = require('ReactDOM');


    return function () {

        var App = React.createClass({
            displayName: 'App',

            render: function () {
                var s = "Hello World!";
                return (
                    <div>
                        {s}
                    </div>
                );
            }
        });

        ReactDOM.render(<App />, document.getElementById("app-container"));
    };
});
