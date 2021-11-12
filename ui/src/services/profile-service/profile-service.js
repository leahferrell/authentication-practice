import axios from 'axios'

const ProfileService = {
  getProfile: async (accessToken) => {
    const profile = await axios({
      method: 'get',
      url: '/api/profile',
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })

    return profile.data
  }
}

export default ProfileService
