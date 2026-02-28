# Blogify

Blogify is a full-stack blogging platform built with modern technologies including **React**, **Node.js**, **Express**, **MongoDB**, and **Tailwind CSS**. It allows users to create, read, update, and delete blog posts with an intuitive UI and secure backend.

## 🚀 Features

- User authentication (signup/login)
- Create, edit, delete blog posts
- View all blogs on the homepage
- Responsive UI built with Tailwind CSS
- RESTful API with Express and MongoDB

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Tailwind CSS |
| Backend | Node.js, Express |
| Database | MongoDB |
| Deployment | *(Yahi bacha hai bas)* |

## 🔗 Live Demo

👉 **Deployed Link:** _COMING SOON_

## 📁 Getting Started

### Clone the repo

```bash
git clone https://github.com/mangalam-srv/Blogify.git
cd Blogify
🔧 Setup
Backend

Navigate to the backend folder

cd backend

Install dependencies

npm install

Create a .env file and add your environment variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

Start the server

npm run dev
Frontend

Navigate to the frontend folder

cd frontend

Install dependencies

npm install

Create a .env file and add:

REACT_APP_API_URL=http://localhost:5000

Start the React app

npm start

📦 API Endpoints
Method	Route	Description
POST	/api/auth/signup	Register user
POST	/api/auth/login	Login user
GET	/api/blogs	Get all blogs
POST	/api/blogs	Create new blog
PUT	/api/blogs/:id	Update a blog
DELETE	/api/blogs/:id	Delete a blog
🧠 Environment Variables

Make sure you add the following to your .env files:

Backend

MONGO_URI=
JWT_SECRET=
PORT=

Frontend

REACT_APP_API_URL=
🛠 Tools & Libraries

React – UI Library

Tailwind CSS – Utility-first CSS framework

Express – Backend server

MongoDB & Mongoose – Database & ODM

JWT – Authentication

👤 Author

Maangs (mangalam-srv)
GitHub: https://github.com/mangalam-srv
