import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Navbar} />
			</Switch>
		</Router>
	);
}

export default App;
