const express = require('express')
const morgan = require('morgan')
const config = require('./config/config')
const routes = require('./routes/routes')

const app = express()

app.use(morgan('combined'))
app.use(routes)

app.listen(config.port, () => {
	console.log(`Example app listening at http://localhost:${config.port}`)
})
