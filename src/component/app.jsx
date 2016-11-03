const React = require('react');
const ReactDOM = require('react-dom');
import '../style/app.sass'

const App = React.createClass({
    render () {
        return (
            <div className="app">
                <a>
                    App
                </a>
                <div className="test" />
            </div>
        );
    }
});

module.exports = App;
