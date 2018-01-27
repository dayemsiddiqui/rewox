import { Router } from 'express'

const trainings = Router()

trainings.get('/', (req, res) => {
  	res.json({status: 'success', payload:[{intent_name: 'Dummy Intent'}]})
})

trainings.post('/train', (req, res) => {
	console.log("Request Payload", req.body)
  	res.json({status: 'success', payload:[{intent_name: 'Dummy Intent'}]})
})



export default trainings
