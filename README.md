# 2ndBuy: Full-Stack Web Application

## Project Overview

2ndBuy is a full-stack web application featuring a client-server architecture. The project consists of two main components:

- **Backend**: A Node.js/Express REST API (located in `backend/`) that uses MongoDB (via Mongoose) for data persistence and Passport.js for authentication.
- **Frontend**: A React single-page application (SPA) (located in `frontend/`) that uses Redux for state management and interacts with the backend API.

## Run & Build Instructions

All major development tasks are automated via the root-level `Makefile`. Use the following commands from the project root:

### Install Dependencies
```
make install
```
Installs dependencies for both backend and frontend.

### Start the Application
```
make start
```
Starts both backend and frontend development servers concurrently.

### Build for Production
```
make build
```
Builds both backend and frontend for production deployment.

### Run Tests
```
make test
```
Runs tests for both backend and frontend.

## Further Setup

For detailed setup, configuration, and usage instructions for each component, refer to the `README.md` files in the `backend/` and `frontend/` directories.
