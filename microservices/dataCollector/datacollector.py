# This service fetches tweets from twitter

import tweepy
import pika
import json
print "Data Collection Service Started"

rq = 'data_collector'
sq = 'service_manager'


def fetch(consumer_key, consumer_secret, access_token, access_token_secret):
	auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
	auth.set_access_token(access_token, access_token_secret)
	api = tweepy.API(auth)
	public_tweets = api.home_timeline()
	payload = { 'payload': {'tweets': []}}
	for tweet in public_tweets:
	    payload['payload']['tweets'].append(tweet.text)
	payload['service'] = 'backend'
	respond(json.dumps(payload))


def respond(message):
	print "Sending message to service manager: " + message
	channel.basic_publish(exchange='',
                      routing_key=sq,
                      body=message)

def callback(ch, method, properties, body):
	print "Received a data collection request: " + body
	payload = json.loads(body)
	fetch(consumer_key=payload['consumer_key'], consumer_secret=payload['consumer_secret'],
	 access_token=payload['access_token'], access_token_secret=payload['access_token_secret'])


connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()
channel.queue_declare(queue=rq)
channel.queue_declare(queue=sq)




channel.basic_consume(callback,
                      queue=rq,
                      no_ack=True)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()