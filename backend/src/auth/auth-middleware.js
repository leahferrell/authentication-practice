const OktaJwtVerifier = require('@okta/jwt-verifier')
const config = require('../config/config')

const oktaJwtVerifier = new OktaJwtVerifier({
	issuer: config.okta.issuer
});

function authorized(req, res, next) {
	const authHeader = req.headers.authorization || ''
	const match = authHeader.match(/Bearer (.+)/)

	if (!match) {
		res.status(401)
		return next('Unauthorized')
	}

	const accessToken = match[1]

	return oktaJwtVerifier.verifyAccessToken(accessToken, config.okta.expectedAudience)
		.then((jwt) => {
			req.jwt = jwt

			next()
		})
		.catch((err) => {
			res.status(401).send(err.message)
		})
}

module.exports = authorized
