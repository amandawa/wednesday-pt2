import React from 'react';
import ReactDOM from 'react-dom';
import PollContainer from '../containers/PollContainer';
import {BrowserRouter} from 'react-router-dom';
import App from '../containers/App.js';
import AboutUs from '../components/AboutUs.js';

// ReactDOM.render(
//     <PollContainer />,
//     document.getElementById('app')
// );

ReactDOM.render((
	<BrowserRouter>
		<App/>
	</BrowserRouter>),
	document.getElementById('app')
);
