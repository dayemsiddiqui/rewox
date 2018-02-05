# WoxCut
Analyse, Respond and Automate your business social profiles.

Services we need to run:

- RabbitMQ
- RethinkDB

How to Handle Monitor:
 - Will not have a continous monitoring feature.
 - A process will run once on a user request to analyse the web for a brand sentiment and store the aggregated report.
 - Continous monitoring of timeline will be avaliable on paid plans.

Random Ideas:
- Learn autoresponder. (Sentence similarity based active learning)
- Connect with CRM to learn the chatbot.
- Set predefined answers for particular question.
- There is should be a module for training

Algorithm for suggesting answers:
 - Compare the question with the rest of the (question, answer) tuple in the dataset.
 - Keep those questions whose similarity are greater than 90%
 - Compare the answer of the most matching questions with the answers of the other questions.
 - If the average similarity is greater than 75% than suggest an answer otherwise ignore.
 - Suggest the answers of the top 3 matching questions.


Analyze:
- Define Entities of Interests (e.g Iphone)
- Automatically fetch bad reviews of the entity.
- Determine with parts of the entity people are complaining about
- Determine with parts of the entity people are liking

Chatbot Platform:
 - Intents: What action should be taken in response to user's message
 - Entities: Objects we want to interact with

Key Advantages:
- Self Hosted
- Option for entity based answers.
- Self learning

 Database Structure:
 - Entities: {
 	entity_name : "",
 	values: [],
 }

 - Intent: {
 	name: ""
 	questions: [],
 	answers: [
 	{statement: "", isEntityBased: true},
 	],
 	action: {
 		name: "",
 		params: [
 		{isRequired: true, name: "", entity_name: "", value: ""}
 		],
 	}
 	entities: []
 }

 - questions: {
   statement: "",
   entities: [],
 } 

 SOCKET PAYLOAD
 ==============

 From server/ API endpoints to client:
  - In String
  - {custom: {task: "", module: ""}, payload: "", status: ""}


 NLU Service Protocol:
 ====================
 - Bot Response:
 	method: microservice
 	body: {
 	task: 'BOT_RESPOND',
 	statement: '', //String,
 	custom: {}, //Any object,
 	intents: [], // Array of intent objects 
 	}
 	Response:
 	{custom: {} //Whatever Object you posted, server: {task: 'BOT_RESPOND', success: 'false' , statement: ''} //Any Object, result: { response: "" //String, action: {} //Action Object}}

 API Reference Guide:
 ====================

 - NLP:
 	- Named Entity Recognition:
 		url: /api/nlp/ner
 		method: post
 		body: {
 		task: 'NER',
 		statement: '', //String,
 		custom: {}, //Any object or string
 		}
 		Response:
 		{custom: {} //Whatever Object or string you posted, result: [{start: "", end: "", label: ""}]}

 	- Bot Response:
 		url: /api/bot/respond
 		method: post
 		body: {
 		task: 'BOT_RESPOND',
 		statement: '', //String,
 		custom: {}, //Any object
 		}
 		Response:
 		{custom: {} //Whatever Object you posted, result: { response: "" //String, action: {} //Action Object}}
 		
 - Intent:
 	- Create Intent:
 		url: /api/intents/save
 		method: post
 		body: {
		 	name: ""
		 	questions: [],
		 	answers: [
		 	{statement: "", isEntityBased: true},
		 	],
		 	action: {
		 		name: "",
		 		params: [
		 		{isRequired: true, name: "", entity_name: "", value: ""}
		 		],
		 	}
		 	entities: []
		 }

  	- Fetch Intents:
  		url: /api/intents/
  		method: get
	  		

	
