const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var path = require('path')
var serveStatic = require('serve-static')
var expressVue = require('express-vue')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(serveStatic(path.join(__dirname + "/../../client/dist")))
//Connect all api calls to separate routes
app.use('/api/auth', require('./api/auth'))



app.listen(process.env.PORT || 8081)