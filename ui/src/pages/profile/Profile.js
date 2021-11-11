import React from 'react'
import { useOktaAuth } from '@okta/okta-react'

const Profile = () => {
	const { oktaAuth } = useOktaAuth();
	const logout = async () => oktaAuth.signOut('/');

	return (
		<div>
			<p>super secret profile here!!</p>
			<button onClick={logout}>Logout</button>
		</div>
	)
}

export default Profile
