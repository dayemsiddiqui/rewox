import app from './../index'

var rq = 'backend'
var sq = 'service_manager'
var open = require('amqplib').connect('amqp://localhost');

console.log("RabbitMQ data collection service initiated")

open.then(function(conn) {
  return conn.createChannel();
}).then(function(ch) {
  return ch.assertQueue(rq, {durable: false}).then(function(ok) {
    return ch.consume(rq, function(msg) {
      if (msg !== null) {
        console.log("Payload Received: ", msg.content.toString());
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
