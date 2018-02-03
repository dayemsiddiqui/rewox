cd frontend
npm install
npm run build
cd ..
nohup rethinkdb &
nohup nodemon --exec python -u microservices/serviceManager/servicemanager.py &
# nohup python microservices/dataCollector/datacollector.py
nohup nodemon --exec python -u microservices/nlu/nlu.py &
cd backend
npm install
npm run dev 

