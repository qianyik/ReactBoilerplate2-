var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');
var Main = require('Main');

//load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//App css
require('style!css!applicationStyles')

ReactDOM.render(
	<Router history={hasHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>,
	document.getElementById('app')
);
