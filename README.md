# MERN E-Commerce Product Listing System

## Overview

This project is a **Product Listing System** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** with **Redux Toolkit** for state management.

The application provides secure **JWT authentication**, **role-based access**, and **admin product management** features.

Admins can create, update, and delete products while authenticated users can view the product list.

---

# Tech Stack

## Frontend

* React.js
* Redux Toolkit
* Axios
* Vite

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cookie Parser
* CORS

---

# Features

## Authentication

* User Registration
* User Login
* User Logout
* User Profile Access
* JWT-based authentication
* Cookie-based authentication

---

## Product Management (Admin)

Authenticated users can:

* Create Product
* Update Product
* Delete Product
* View All Products

---

# Product Schema

```
name: String
description: String
price: Number
category: String
brand: String
stock: Number
rating: Number
createdAt: Date
```

Example Product:

```json
{
  "name": "MacBook Air M2",
  "description": "Apple laptop with M2 chip",
  "price": 1200,
  "category": "Electronics",
  "brand": "Apple",
  "stock": 20,
  "rating": 4.7,
  "createdAt": "2026-03-05"
}
```

---

# Project Structure

```
project-root

client
 └── src
     ├── components
     ├── pages
     ├── redux
     └── App.jsx

server
 ├── controllers
 │   ├── auth.controllers.js
 │   └── product.controller.js
 │
 ├── middlewares
 │   └── auth.middleware.js
 │
 ├── routes
 │   ├── auth.routes.js
 │   └── product.router.js
 │
 ├── app.js
 └── server.js
```

---

# Backend Setup

## Install Dependencies

```
cd server
npm install
```

---

## Environment Variables

Create `.env`

```
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## Run Backend Server

```
npx nodemon
```

The backend runs on:

```
http://localhost:3000
```

---

# Frontend Setup

```
cd client
cd vite-project
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# API Base URL

```
http://localhost:3000/api
```

---

# Authentication Routes

## Register User

POST

```
/api/auth/register
```

---

## Login User

POST

```
/api/auth/login
```

---

## Logout User

GET

```
/api/auth/logout
```

---

## Get User Profile

GET

```
/api/auth/profile
```

Middleware Used:

```
universalAuth
```

---

# Product Routes

## Create Product

POST

```
/api/product/create
```

Middleware:

```
authMiddleware
```

---

## Update Product

PATCH

```
/api/product/:id
```

Middleware:

```
authMiddleware
```

---

## Delete Product

DELETE

```
/api/product/:id
```

Middleware:

```
authMiddleware
```

---

## View All Products

GET

```
/api/product/viewAllProducts
```

Middleware:

```
authMiddleware
```

---

# Security

The application uses:

* JWT Authentication
* HTTP-only cookies
* Protected routes using middleware
* Role-based access control

---

# Development

Backend is started using **nodemon**:

```
npx nodemon
```

This automatically restarts the server on file changes.

---

# Future Improvements

* Product filtering
* Product search
* Product images
* Product reviews
* Shopping cart
* Order system

---

# Author

Itee Rajpurohit
MERN Stack Developer
