import React from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react'
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'

import config from './config/config'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'

const oktaAuth = new OktaAuth(config.okta)

const App = () => {
	const history = useHistory()

	const restoreOriginalUri = async (_oktaAuth, originalUri) => {
		history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
	}

	const customAuthHandler = () => {
		history.push(config.paths.login)
	}

	const onAuthResume = async () => {
		history.push(config.paths.login)
	}

	return (
		<Security
			oktaAuth={oktaAuth}
			onAuthRequired={customAuthHandler}
			restoreOriginalUri={restoreOriginalUri}
		>
			<Switch>
				<Route
					path={config.paths.loginCallback}
					render={(props) => <LoginCallback {...props} onAuthResume={onAuthResume} />}
				/>
				<Route path={config.paths.login} component={Login} />
				<SecureRoute path={config.paths.profile} component={Profile} />
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Security>
	);
};

const AppWithRouter = () => {
	return (
		<Router>
			<App/>
		</Router>
	)
}

export default AppWithRouter;
