import { Router } from 'express'
var r = require('rethinkdbdash')({
  db: 'woxcut'
})
const trainings = Router()

trainings.get('/', (req, res) => {
	r.table('trainings').run().then((result) => {
		res.json({status: 'success', payload: result})
  	})
})

trainings.post('/train', (req, res) => {
	console.log("Request Payload", req.body)
		req.body.intent.questions.push(req.body.statement)
		console.log("Updated Intent", req.body.intent)
		r.table('intents').filter({name: req.body.intent.name}).update(req.body.intent).run().then((result) => {
			console.log("Updated", result)
			r.table('trainings').filter({statement: req.body.statement}).delete().run().then((result) => {
				res.json({status: 'success', payload: {}})
		  	})
		})
	
})



export default trainings
