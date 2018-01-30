import pika
import json
print "Service Manager Started"

rq = 'service_manager'
queues = {'backend': 'backend', 'data_collector': 'data_collector', 'nlu': 'nlu'}

connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()
channel.queue_declare(queue=rq)

for key in queues:
	channel.queue_declare(queue=key)

def publish(data):
	print "Sending message: " + json.dumps(data['payload'])
	channel.basic_publish(exchange='',
                      routing_key=data['service'],
                      body=json.dumps(data['payload']))
	

def callback(ch, method, properties, body):
    print(" [x] Payload received:  %r" % body)
    data  = json.loads(body)
    if 'service' in data:
    	print "Sending to service: " + data['service']
    	publish(data)
    ch.basic_ack(delivery_tag = method.delivery_tag)

channel.basic_qos(prefetch_count=1)
channel.basic_consume(callback,
                      queue=rq,)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()