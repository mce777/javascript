var React = require('react');
var List = require('./List.jsx')

var ListManager = React.createClass({
    getInitialState: function() {
        return {items: [], newItemText:''};
    },
    handleSubmit: function(e) {
        e.preventDefault();

        var currentItems = this.state.items;
    }
});
