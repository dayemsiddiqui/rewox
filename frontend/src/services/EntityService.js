import api from './api'

export default  {
  fetchEntities () {
    return api().get('entities')
  },
  saveEntities (payload) {
    return api().post('entities/save', payload).then((res, err) => {
    	console.log("Error in save intent:", err)
    	console.log("Response in save intent:", res.data)
    })
  },
  identifyEntities (payload) {
    return api().post('nlp/ner', payload).then((res, err) => {
      console.log("Error in save intent:", err)
      console.log("Response in save intent:", res.data)
    })
  }
}
