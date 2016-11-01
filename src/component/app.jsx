const React = require('react');
const ReactDOM = require('react-dom');
import '../style/app.sass'

var App = React.createClass({
    render () {
        return (
            <div className="app">
                <a>
                    App
                </a>
            </div>
        );
    }
});

module.exports = App;
