import { Router } from 'express'
var r = require('rethinkdbdash')({
  db: 'woxcut'
})

export default ({ io }) => {

const intents = Router()

intents.get('/', (req, res) => {
  	res.json({status: 'success', payload:[{intent_name: 'Dummy Intent'}]})
})

intents.post('/save', (req, res) => {
	console.log("Request Payload", req.body)
	r.table('intents').insert(req.body).run().then((result) => {
		res.json({status: 'success', payload: result})
  	})
})
 return intents
}

