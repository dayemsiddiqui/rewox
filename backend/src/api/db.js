import { Router } from 'express'
var r = require('rethinkdbdash')({
  db: 'woxcut'
})
const db = Router()

db.get('/tweets', (req, res) => {
  r.table('tweets').run().then((result) => {
	res.json({status: 'success', payload: result})
  })

})

r.table('tweets').changes().run().then(function (feed) {
    console.log('Listening for changes...');
    feed.each((err, change) => {
        console.log('Change detected', change);
    });
});



export default db
