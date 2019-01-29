import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Home from '../pages/home';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<PrivateRoute  exact path="/app"  component={() => <h1>aeee</h1>}  />
		</Switch>
	</BrowserRouter>
);

export default Routes;
