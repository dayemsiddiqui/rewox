import { version } from '../../package.json'
import { Router } from 'express'
import facets from './facets'
import bots from './bots'
import intents from './intents'
import trainings from './trainings'
import entities from './entities'
import auth from './auth'
import dba from './db'
import twitter from './twitter'
import nlp from './nlp'

export default ({ config, db, io}) => {
  let api = Router()

    // mount the facets resource
  api.use('/facets', facets({ config, db }))
  api.use('/auth', auth)
  api.use('/db', dba)
  api.use('/intents', intents({ io }))
  api.use('/entities', entities)
  api.use('/trainings', trainings)
  api.use('/bots', bots)
  api.use('/twitter', twitter)
  api.use('/nlp', nlp)
      // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version })
  })

    // api routes
  api.use('/bots', bots)

  return api
}
