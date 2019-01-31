import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Home from '../pages/home';
import Cards from '../pages/cards';
import Login from '../pages/login';
import Register from '../pages/register';

const Routes = () => (
	<Switch>
		<PrivateRoute exact path="/" component={Home} />
		<PrivateRoute exact path="/cards" component={Cards} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/register" component={Register} />

		<PrivateRoute 
			exact 
			path="/logout" 
			component={props => {
				localStorage.removeItem('token');
				return (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
				);
			}} 
		/>
	</Switch>
);

export default Routes;
