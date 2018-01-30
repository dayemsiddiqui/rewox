import { Router } from 'express'
import microservice from './microservice'
const nlp = Router()

nlp.post('/ner', (req, res) => {
  microservice.send({service: 'nlu', payload:req.body})
  res.json({status: 'success', payload: 'Request sent for fetching tweets'})
})




export default nlp
