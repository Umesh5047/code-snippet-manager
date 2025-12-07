Code Snippet Manager (MERN Stack)

📋 Overview

A full-stack MERN application that allows developers to save, organize, and share code snippets. Includes authentication, protected routes, and CRUD operations for snippets.

🚀 Features

User registration and login (JWT authentication)

Create, read, update, and delete code snippets

Public and private snippet visibility

Tag-based organization

Responsive React frontend

MongoDB database with Mongoose models

🛠️ Tech Stack

Frontend: React, React Router, Axios

Backend: Node.js, Express.js

Database: MongoDB (Atlas or local)

Authentication: JWT + bcrypt

⚙️ Installation

1. Clone the repository

mkdir code-snippet-manager
cd code-snippet-manager

2. Backend Setup

cd backend
npm init -y
npm install express mongoose dotenv bcryptjs jsonwebtoken cors

Create a .env file:

PORT=5000
MONGO_URI=mongodb+srv://<your-mongo-uri>
JWT_SECRET=your_jwt_secret

Run backend:

node server.js

3. Frontend Setup

cd ../frontend
npx create-react-app .
npm install axios react-router-dom

Run frontend:

npm start

📂 Project Structure

code-snippet-manager/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── api.js
│   │   └── components/
│   └── package.json

🧪 Usage

Register a new user via /register route.

Login to receive a JWT token.

Use the token to create new snippets.

View public snippets without login.

Manage your own snippets when logged in.

📖 API Endpoints

Auth

POST /api/auth/register → Register new user

POST /api/auth/login → Login and receive JWT

Snippets

GET /api/snippets → Get public snippets

POST /api/snippets → Create snippet (requires JWT)

📦 Deployment

Backend: Deploy on Render/Railway/Heroku

Frontend: Deploy on Netlify/Vercel

Database: MongoDB Atlas

✅ Assignment Requirements Covered

RESTful API with multiple endpoints

MongoDB schema design with relationships

React components with routing and hooks

Authentication and protected routes

Error handling and user feedback

README with setup instructionsCode Snippet Manager (MERN Stack)

📋 Overview

A full-stack MERN application that allows developers to save, organize, and share code snippets. Includes authentication, protected routes, and CRUD operations for snippets.

🚀 Features

User registration and login (JWT authentication)

Create, read, update, and delete code snippets

Public and private snippet visibility

Tag-based organization

Responsive React frontend

MongoDB database with Mongoose models

🛠️ Tech Stack

Frontend: React, React Router, Axios

Backend: Node.js, Express.js

Database: MongoDB (Atlas or local)

Authentication: JWT + bcrypt

⚙️ Installation

1. Clone the repository

mkdir code-snippet-manager
cd code-snippet-manager

2. Backend Setup

cd backend
npm init -y
npm install express mongoose dotenv bcryptjs jsonwebtoken cors

Create a .env file:

PORT=5000
MONGO_URI=mongodb+srv://<your-mongo-uri>
JWT_SECRET=your_jwt_secret

Run backend:

node server.js

3. Frontend Setup

cd ../frontend
npx create-react-app .
npm install axios react-router-dom

Run frontend:

npm start

📂 Project Structure

code-snippet-manager/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── api.js
│   │   └── components/
│   └── package.json

🧪 Usage

Register a new user via /register route.

Login to receive a JWT token.

Use the token to create new snippets.

View public snippets without login.

Manage your own snippets when logged in.

📖 API Endpoints

Auth

POST /api/auth/register → Register new user

POST /api/auth/login → Login and receive JWT

Snippets

GET /api/snippets → Get public snippets

POST /api/snippets → Create snippet (requires JWT)

📦 Deployment

Backend: Deploy on Render/Railway/Heroku

Frontend: Deploy on Netlify/Vercel

Database: MongoDB Atlas

✅ Assignment Requirements Covered

RESTful API with multiple endpoints

MongoDB schema design with relationships

React components with routing and hooks

Authentication and protected routes

Error handling and user feedback

README with setup instructions