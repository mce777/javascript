var React = require('react');

var ListItem = React.createClass({
    render: function() {
        return (
            <li>
                {/*curly braces indicate javascript*/}
                <h4>{this.props.text}</h4>
            </li>
        );
    }
});

module.exports = ListItem;
