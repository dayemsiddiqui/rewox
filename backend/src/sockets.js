
export default function({ io }) {
  console.log("Initiating Sockets")

  io.on('connection', function(client){
    console.log("Connected")
    client.on('event', function(data){
      console.log("Some event receieved", data)
    });
    client.on('disconnect', function(){
      console.log("Disconnected")
    });
  });
}

