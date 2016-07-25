var React = require('react');
var List = require('./List.jsx');

var WeatherInfo = React.createClass({
    getInitialState: function() {
        return {items: [], newItemText:''};
    },
    onChange: function (e) {
        this.setState({newItemText: e.target.value});
    },

    render: function () {

        var divStyle = {
            marginTop: 10
        }

        var headingStyle = {

        }

        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
        }

        return (
            <div style={divStyle} className="col-sm-12">
                <div className="panel panel-default">
                    <div style={headingStyle} className="panel-body text1 al">
                        <h1>{this.props.title}</h1>
                        <h5>{this.props.text}</h5>
                    </div>


                </div>
            </div>
        );
    }
});

module.exports = WeatherInfo;