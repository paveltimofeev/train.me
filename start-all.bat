

rem start elastic

rem start backend
cd backend/nodesrv
start  /MIN start-backend-server.sh
cd ../..

rem start frontend
cd frontend
start  /MIN start.sh
cd ..

rem open website
start chrome http://localhost:8000/webapp/