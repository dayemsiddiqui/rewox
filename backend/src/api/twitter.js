import { Router } from 'express'
import microservice from './microservice'
const twitter = Router()
import config from './../config'
twitter.get('/fetch', (req, res) => {
  microservice.send({service: 'data_collector', payload:{ keywords: 'iphone', consumer_key: config.CONSUMER_KEY, consumer_secret: config.CONSUMER_SECRET, access_token: config.ACCESS_TOKEN, access_token_secret: config.ACCESS_TOKEN_SECRET}})
  res.json({status: 'success', payload: 'Request sent for fetching tweets'})
})




export default twitter
