import { Router } from 'express'
var r = require('rethinkdbdash')({
  db: 'woxcut'
})

export default ({ io }) => {

const intents = Router()

intents.get('/', (req, res) => {
	r.table('intents').run().then((result) => {
		res.json({status: 'success', payload: result})
  	})
})

intents.post('/save', (req, res) => {
	console.log("Request Payload", req.body)
	r.table('intents').filter({name: req.body.name}).run().then((result) => {
		if(result.length <= 0){
			r.table('intents').insert(req.body).run().then((result) => {
				res.json({status: 'success', payload: result, msg: "New intent added successfully"})
		  	})
		}
		else{
			r.table('intents').filter({name: req.body.name}).update(req.body).run().then((result) => {
				res.json({status: 'success', payload: result, msg: "Intent updated successfully"})
		  	})
		}
	})

})
 return intents
}

