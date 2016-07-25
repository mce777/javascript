var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
var BigInfo = require('./components/BigInfo.jsx');
var WeatherInfo = require('./components/WeatherInfo.jsx');
var LittleInfo = require('./components/LittleInfo.jsx');


ReactDOM.render(<ListManager title="20" text="new followers" headingColor="#ffffff"/>, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="$1250" text="average income" headingColor="#ffffff"/>, document.getElementById('todo'));
ReactDOM.render(<ListManager title="$75,000" text="yearly income goal" headingColor="#ffffff"/>, document.getElementById('christmas'));

ReactDOM.render(<BigInfo title="15080" text="Shot Views" headingColor="#66c2ff"
                         title2="12000" prop2="Likes" title3="5100" prop3="comments" bcolor="#666666" />, document.getElementById('aone'));
ReactDOM.render(<BigInfo title="15080" text="Shot Views" headingColor="#e6b3ff"
                         title2="12000" prop2="Likes" title3="5100" prop3="comments" bcolor="#666666" />, document.getElementById('mbo'));

ReactDOM.render(<WeatherInfo title="18" text="Paris" headingColor="#ff9900"/>, document.getElementById('weather'));
ReactDOM.render(<LittleInfo title="1.5k" text="New visitors" headingColor="#66c2ff"/>, document.getElementById('little1'));
ReactDOM.render(<LittleInfo title="50%" text="Bounce rate" headingColor="#9966ff"/>, document.getElementById('little2'));
ReactDOM.render(<LittleInfo title="28%" text="Searches" headingColor="#ff5050"/>, document.getElementById('little3'));
ReactDOM.render(<LittleInfo title="140.5 kb" text="Traffic" headingColor="#00cc00"/>, document.getElementById('little4'));