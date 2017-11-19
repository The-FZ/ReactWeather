var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');

//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(<Main/>,document.getElementById('app'));
