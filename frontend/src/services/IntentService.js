import api from './api'

export default  {
  fetchIntents () {
    return api().get('intents').then((res, err) => {
    	console.log("Response", res.data)
    	console.log("Error", err)
    })
  },
  saveIntents (payload) {
    return api().post('intents/save', payload).then((res, err) => {
    	console.log("Error in save intent:", err)
    	console.log("Response in save intent:", res.data)
    })
  }
}
