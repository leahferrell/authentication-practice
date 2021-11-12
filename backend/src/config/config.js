require('dotenv').config()

const DOMAIN = process.env.DOMAIN

const config = {
  okta: {
    domain: DOMAIN,
    issuer: `https://${DOMAIN}/oauth2/default`,
    expectedAudience: 'api://default'
  },
  port: '8080'
}

module.exports = config
