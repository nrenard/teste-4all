import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import { deleteToken } from '../services/auth';

import Home from '../pages/home';
import Cards from '../pages/cards';
import Login from '../pages/login';
import Register from '../pages/register';
import Contacts from '../pages/contacts';
import Transfers from '../pages/transfers';
import NotFound from '../pages/notFound';

const Routes = () => (
	<Switch>
		<PrivateRoute exact path="/" component={Home} />
		<PrivateRoute exact path="/cards" component={Cards} />
		<PrivateRoute exact path="/contacts" component={Contacts} />
		<PrivateRoute exact path="/transfers" component={Transfers} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/register" component={Register} />

		<PrivateRoute
			exact
			path="/logout"
			component={props => {
        deleteToken();
				return (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
				);
			}}
		/>

    <Route component={NotFound} />
	</Switch>
);

export default Routes;
