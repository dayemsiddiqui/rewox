cd frontend
npm install
npm run build
cd ..
rethinkdb
python microservices/serviceManager/servicemanager.py
python microservices/dataCollector/datacollector.py
cd backend
npm install
npm run start

