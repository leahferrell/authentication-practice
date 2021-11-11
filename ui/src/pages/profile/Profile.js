import React, {useEffect, useState} from 'react'
import { useOktaAuth } from '@okta/okta-react'

const Profile = () => {
	const { authState, oktaAuth } = useOktaAuth();
	const [userInfo, setUserInfo] = useState(null);
	const logout = async () => oktaAuth.signOut('/');

	useEffect(() => {
		if (!authState.isAuthenticated) {
			setUserInfo(null)
		} else {
			oktaAuth.getUser().then(info => {
				setUserInfo(info)
			})
		}
	}, [authState, oktaAuth])

	console.log(userInfo)

	return (
		<div>
			<p>super secret profile here!!</p>
			{userInfo && <p>Hello, {userInfo.name}!</p>}
			<button onClick={logout}>Logout</button>
		</div>
	)
}

export default Profile
