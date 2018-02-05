import spacy
from random import randint

THRESHOLD = .90	
def getSimilar(nlp, question, qlist):
	doc = nlp(question)
	docset = []
	matched = ''
	maxscore = 0
	i = 0
	for q in qlist:
		docset.append(nlp(q))
	for statement in docset:
		score = doc.similarity(statement)
		if score > maxscore:
			maxscore = score
			matched = qlist[i]
		i = i + 1
	if maxscore < THRESHOLD:
		return (False, False)
	else:
		return (matched, maxscore)

def getAnswer(nlp, statement, intents):
	maxscore = 0
	result = ""
	target_intent = False
	for intent in intents:
		response, score = getSimilar(nlp, statement, intent['questions'])
		if response != False and score > maxscore:
			result = response
			maxscore = score
			target_intent = intent
			print "Found a better match Score: " + str(maxscore) + " , matched: " + result 

	if target_intent != False:
		answer = target_intent["answers"][randint(0, len(target_intent["answers"]) - 1)]
		return (answer["statement"], True)
	else:
		return ("Sorry, I cant understand your question, I am still learning", False)
	


			
# doc = u"Karachi is the biggest city of Pakistan."

# doc1 = u"Paris is the largest city in France."
# doc2 = u"Vilnius is the capital of Lithuania."
# doc3 = u"An emu is a large bird."

# print getSimilar(nlp, doc, [doc1, doc2, doc3])
