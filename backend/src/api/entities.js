import { Router } from 'express'
var r = require('rethinkdbdash')({
  db: 'woxcut'
})
const entities = Router()

entities.get('/', (req, res) => {
	r.table('entities').run().then((result) => {
		res.json({status: 'success', payload: result})
  	})	
  	
})

entities.post('/save', (req, res) => {
	console.log("Request Payload", req.body)
	r.table('entities').insert(req.body).run().then((result) => {
		res.json({status: 'success', payload: result})
  	})
})

entities.post('/detect', (req, res) => {
	console.log("Request Payload", req.body)
  	res.json({status: 'success', payload:[{intent_name: 'Dummy Intent'}]})
})

export default entities
