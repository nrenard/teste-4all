import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({ component: Component, ...props }) => (
	<Route
		{...props}
		render={props =>
			!!isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
			)
		}
	/>
);

export default PrivateRoute;
