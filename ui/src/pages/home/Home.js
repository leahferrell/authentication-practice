import { useOktaAuth } from '@okta/okta-react'
import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'

import config from '../../config/config'

const Home = () => {
	const { oktaAuth, authState } = useOktaAuth();
	const history = useHistory()

	// const login = async () => oktaAuth.signInWithRedirect({originalUri: '/profile'});
	const login = async () => history.push(config.paths.login)
	const logout = async () => oktaAuth.signOut('/')

	useEffect(() => {

	}, [authState])

	if(!authState) {
		return <div>Loading...</div>;
	}

	if(!authState.isAuthenticated) {
		return (
			<div>
				<p>Not Logged in yet</p>
				<button onClick={login}>Login</button>
			</div>
		);
	}

	return (
		<div>
			<p>Logged in!</p>
			<button onClick={logout}>Logout</button>
		</div>
	);
};

export default Home;
