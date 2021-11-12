const Router = require('express')
const authorized = require('../auth/auth-middleware')
const profileController = require('../controller/profile-controller')

const routes = Router()

routes.get('/api/profile', authorized, profileController.getProfile)

module.exports = routes
