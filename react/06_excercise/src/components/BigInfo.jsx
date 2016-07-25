var React = require('react');
var List = require('./List.jsx')

var BigInfo = React.createClass({
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

        //test
        var bodyStyle = {}

        if (this.props.bcolor) {
            bodyStyle.background = this.props.bcolor;
        }

        return (
            <div style={divStyle} className="col-sm-12 col-xs-12">
                <div className="panel panel-default">
                    <div style={headingStyle} className="panel-heading myheight ">

                    </div>

                    <div className="panel-body al myheight2 text1" style={bodyStyle}>
                        <div className="col-sm-4 col-xs-4">
                            <h3>{this.props.title}</h3>
                            <h5>{this.props.text}</h5>
                        </div>
                        <div className="col-sm-4 col-xs-4">
                            <h3>{this.props.title2}</h3>
                            <h5>{this.props.prop2}</h5>
                        </div>
                        <div className="col-sm-4 col-xs-4">
                            <h3>{this.props.title3}</h3>
                            <h5>{this.props.prop3}</h5>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
});

module.exports = BigInfo;