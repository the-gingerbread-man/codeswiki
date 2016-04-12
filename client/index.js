import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './modules/app.jsx';
import About from './modules/about.jsx';
import Article from './modules/article.jsx';

ReactDOM.render((
	<Router history = {hashHistory}>
		<Route path="/" component={App}/>
		<Route path="/about" component={About}/>
	</Router>
), document.getElementById('container'));