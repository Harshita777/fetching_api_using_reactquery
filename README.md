# React Query Demo Application

A React application demonstrating the usage of React Query for data fetching and state management.

## Tech Stack

- React 19.0.0
- TypeScript
- [@tanstack/react-query](https://tanstack.com/query/latest) v5.62.15
- Axios
- JSON Server (for mock API)

## Prerequisites

- Node.js
- npm/yarn

## Getting Started

### 1. Clone the repository
```sh
git clone <repository-url>
cd my-react-query-app

2. Install dependencies
npm install

3. Start JSON Server (Mock API)
Install JSON Server globally if you haven't:
npm install -g json-server

Run JSON Server with the mock data:
json-server --watch db.json --port 8000

4. Start the React application
In a new terminal window:

npm start

The application will be available at http://localhost:3000

Available Scripts
npm start - Runs the app in development mode
npm test - Launches the test runner
npm run build - Builds the app for production
npm run eject - Ejects from Create React App
API Endpoints
The mock API (JSON Server) provides the following endpoints:

GET http://localhost:8000/data - Fetches user data


Features
React Query implementation for data fetching
TypeScript support
Axios for HTTP requests
Component-based architecture
Custom hooks for data fetching
