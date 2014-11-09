

rem start elastic

rem start backend
cd backend/nodesrv
start start-backend-server.sh
cd ../..

rem start frontend
cd frontend
start start.sh
cd ..

rem open website
start chrome http://localhost:8000/webapp/