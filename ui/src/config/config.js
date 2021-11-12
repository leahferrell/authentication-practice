const OKTA_DOMAIN = process.env.REACT_APP_DOMAIN;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const HOST = window.location.host;
const CALLBACK_PATH = '/login/callback'

const config = {
	paths: {
		login: '/login',
		loginCallback: CALLBACK_PATH,
		profile: '/profile'
	},
	callbackPath: CALLBACK_PATH,
	okta: {
		issuer: `https://${OKTA_DOMAIN}/oauth2/default`,
		clientId: CLIENT_ID,
		redirectUri: `http://${HOST}${CALLBACK_PATH}`,
		scopes: ['openid', 'profile', 'email']
	}
}

export default config
