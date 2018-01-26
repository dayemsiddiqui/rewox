# Rewox
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
