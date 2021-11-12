import React, {useEffect, useState} from 'react'
import { useOktaAuth } from '@okta/okta-react'
import ProfileService from '../../services/profile-service/profile-service'

const Profile = () => {
  const { authState, oktaAuth } = useOktaAuth()
  const [profile, setProfile] = useState(null)
  const logout = async () => oktaAuth.signOut('/')

  useEffect(() => {
    if (!authState.isAuthenticated) {
      setProfile(null)
    } else {
      ProfileService.getProfile(authState.accessToken.accessToken)
        .then((profile) => setProfile(profile))
    }
  }, [authState, oktaAuth])

  return (
    <div>
      <p>super secret profile here!!</p>
      {profile && <p>Hello, {profile.name}!</p>}
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile
