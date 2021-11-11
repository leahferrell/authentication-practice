import { useOktaAuth } from '@okta/okta-react'
import React, { useEffect, useState } from 'react'

const Home = () => {
	const { oktaAuth, authState } = useOktaAuth();

	const login = async () => oktaAuth.signInWithRedirect({originalUri: '/profile'});
	const logout = async () => oktaAuth.signOut('/');

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
