import app from './../index'


var rq = 'backend'
var sq = 'service_manager'
var open = require('amqplib').connect('amqp://localhost');
var r = require('rethinkdbdash')({
  db: 'woxcut'
})

console.log("RabbitMQ data collection service initiated.")

open.then(function(conn) {
  return conn.createChannel();
}).then(function(ch) {
  return ch.assertQueue(rq, {durable: false}).then(function(ok) {
    return ch.consume(rq, function(msg) {
      if (msg !== null) {
        console.log("Payload Received: ", msg.content.toString());
        var content = JSON.parse(msg.content.toString())
        console.log("Content: ", content)
        if(content.server && content.server.task == 'BOT_RESPOND' && content.server.success == 'false'){
          console.log("Failed to recognise following statement: ", content.server.statement)
            r.table('trainings').insert(content.server).run().then((result) => {
              console.log("Added the question to potential training")
              })
        }
        app._io.sockets.emit('event', msg.content.toString())
        ch.ack(msg);
      }
    });
  });
}).catch(console.warn);



const microservice = {
	send: (payload) => {

		open.then(function(conn) {
		  return conn.createChannel();
		}).then(function(ch) {
		  return ch.assertQueue(sq, {durable: false}).then(function(ok) {
		    return ch.sendToQueue(sq, new Buffer(JSON.stringify(payload)));
		  });
		}).catch(console.warn);
	}
}




export default microservice
