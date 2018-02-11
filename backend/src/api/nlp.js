import { Router } from 'express'
import microservice from './microservice'
const nlp = Router()
var r = require('rethinkdbdash')({
  db: 'woxcut'
})

nlp.post('/ner', (req, res) => {
	r.table('entities').run().then((result) => {
		req.body.entities = result
		microservice.send({service: 'nlu', payload:req.body})
		res.json({status: 'success', payload: 'Request sent for recognizing entities'})
  	})
  
  
})




export default nlp
