'''
 * Receive: {task: '', statement: '', custom: {}}
 * Send: {service: 'backend', payload: {}}
 * Payload in send: payload: {result: {}, custom: ''}
'''
import spacy
import tweepy
import pika
import json
import similarity

nlp = spacy.load('en')

print "NLU Service Started"

rq = 'nlu'
sq = 'service_manager'

def ner(sentence):
	doc = nlp(sentence)
	entities = []
	for ent in doc.ents:
		entities.append({"word": ent.text, "start": ent.start_char, "end": ent.end_char, "label": ent.label_})
		print(ent.text, ent.start_char, ent.end_char, ent.label_)
	return entities

def bot_reply(sentence, intents):
	answer, success = similarity.getAnswer(nlp, sentence, intents)
	if success is False:
		return answer, {"task": 'BOT_RESPOND', "success": 'false' , "statement": sentence}
	else:
		return answer, {}


def respond(message):
	message['service'] = "backend"
	message = json.dumps(message)
	print "Sending message to service manager: " + message
	channel.basic_publish(exchange='',
                      routing_key=sq,
                      body=message)


def callback(ch, method, properties, body):
	print "Received a new request: " + body
	payload = json.loads(body)
	custom =  payload['custom']
	if payload['task'] == 'NER':
		result = ner(payload['statement'])
		message = {"payload": {"result": result, "custom": custom}}
		respond(message)
	if payload['task'] == 'BOT_RESPOND':
		response, server = bot_reply(payload['statement'], payload['intents'])
		result = {"response": response, "action": {}}
		message = {"payload": {"result": result, "custom": custom, "server": server}}
		respond(message)
		
	## Do some work here


connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()
channel.queue_declare(queue=rq)
channel.queue_declare(queue=sq)




channel.basic_consume(callback,
                      queue=rq,
                      no_ack=True)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()



