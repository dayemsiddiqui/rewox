import api from './api'

export default  {
  fetchStatements () {
    return api().get('trainings')
  },
  assignStatements (payload) {
  	console.log("Saving the following question to intent", payload)
    return api().post('trainings/train', payload)
  }
}
