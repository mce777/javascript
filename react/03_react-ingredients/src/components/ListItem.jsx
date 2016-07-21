var React = require('react');

var ListeItem = React.createClass({
  render: function() {
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
});

module.exports = ListeItem;
