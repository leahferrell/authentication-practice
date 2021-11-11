import React from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react'
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'

import config from './config/config'
import oktaConfig from './config/okta-config'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'

const oktaAuth = new OktaAuth(oktaConfig)

const App = () => {
	const history = useHistory()
	const restoreOriginalUri = async (_oktaAuth, originalUri) => {
		console.log(history)
		history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
	}

	return (
		<Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
			<Switch>
				<Route path={config.CALLBACK_PATH} component={LoginCallback}/>
				<SecureRoute path='/profile' component={Profile} />
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
