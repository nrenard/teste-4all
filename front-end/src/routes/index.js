import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';

const Routes = () => (
	<Switch>
		<PrivateRoute exact path="/" component={Home}  />
		<Route exact path="/login" component={Login} />
		<Route exact path="/register" component={Register} />
		{/* <Route component={() => <h1>aeeeooo</h1>} /> */}
	</Switch>
);

export default Routes;
