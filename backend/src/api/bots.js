import { Router } from 'express'
import microservice from './microservice'
var r = require('rethinkdbdash')({
  db: 'woxcut'
})
const bot = Router()

bot.post('/respond', (req, res) => {
	r.table('intents').run().then((result) => {
		req.body.intents = result
		microservice.send({service: 'nlu', payload:req.body})
		res.json({status: 'success'})
  	})
})

export default bot
