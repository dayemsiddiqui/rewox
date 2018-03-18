import api from './api'

export default  {
  fetchIntents () {
    return api().get('intents')
  },
  saveIntents (payload, notify) {
  	console.log("Saving the following intent", payload)
    return api().post('intents/save', payload).then((res, err) => {
    	console.log("Error in save intent:", err)
    	console.log("Response in save intent:", res.data)
    	payload.answers = []
        payload.name = ""
        payload.questions = []
        notify({
          component: {
            template: `<span>Intent has been saved successfully.</span>`
          },
          horizontalAlign: 'right', // right | center | left
          verticalAlign: 'top', // top | bottom
          type: 'success'  // info | success | warning | danger
        })
  
    })
  },
  deleteIntent (intent) {
    return api().post('intents/delete', intent)
  },
}
