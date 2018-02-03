import api from './api'

export default {
  fetchBots () {
    return api().get('bots')
  },
  askBot(payload) {
  	return api().post('bots/respond', payload).then((res, err) => {
    	console.log("Error in bot response:", err)
    	console.log("Request sent:", res.data)
    })
  }
}
