import dotenv from 'dotenv'
import dev from './dev'
import production from './production'
import test from './test'

dotenv.config()

const config = {
  port: 8080,
  bodyLimit: '100kb',
  corsHeaders: ['Link'],
  CONSUMER_KEY: 'eCw64tkhBc4X1g3iIMR4lU7LG',
  CONSUMER_SECRET: 'eJvv2arJsGEY1QjM10mcqheb1OhpJLZ86T4Sdn3lVWG7Zjnnmw',
  ACCESS_TOKEN: '3382848435-aSQ0cXU9zkMfQrvlGjNIqfhcBgH0ZU3OBWzF0aD',
  ACCESS_TOKEN_SECRET: 'NWaiswshbFTw0GHfaNF87XYSMpxU9xaBicAX2wcRkqfhh',
}

export const setupConfig = () => {
  let exportCfg

  if (process.env.NODE_ENV === 'test') {
    exportCfg = {
      ...config,
      ...test()
    }
  } else if (process.env.NODE_ENV === 'prod') {
    exportCfg = {
      ...config,
      ...production()
    }
  } else {
    exportCfg = {
      ...config,
      ...dev()
    }
  }

  return exportCfg
}

export default setupConfig()
