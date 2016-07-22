var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
var BigInfo = require('./components/BigInfo.jsx');

ReactDOM.render(<ListManager title="20" text="random description"/>, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="ToDo" text="random description"/>, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Christmas" text="random description" headingColor="#b31217"/>, document.getElementById('christmas'));
ReactDOM.render(<ListManager title="ToDo" text="random description"/>, document.getElementById('another'));
ReactDOM.render(<BigInfo title="Big Info" text="random description"/>, document.getElementById('aone'));
ReactDOM.render(<BigInfo title="More Big Info" text="random description"/>, document.getElementById('mbo'));
