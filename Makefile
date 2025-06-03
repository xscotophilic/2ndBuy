# Backend commands
backend-install:
	cd backend && npm install

backend-start:
	cd backend && npm start

backend-build:
	cd backend && npm run build

backend-test:
	cd backend && npm test

# Frontend commands
frontend-install:
	cd frontend && npm install

frontend-start:
	cd frontend && npm start

frontend-build:
	cd frontend && npm run build

frontend-test:
	cd frontend && npm test

# All
install: backend-install frontend-install

start:
	cd backend && npm start & \
	cd frontend && npm start & \
	wait

build: backend-build frontend-build

test: backend-test frontend-test
