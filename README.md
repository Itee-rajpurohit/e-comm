# MERN E-Commerce Product Listing System

## Overview

This project is a **Product Listing System** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** with **Redux Toolkit** for state management.

The application provides secure **JWT authentication**, **role-based access**, and **admin product management** features.

Admins can create, update, and delete products while authenticated users can view the product list with **pagination, search, and filtering capabilities**.

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

# Product Management (Admin)

Authenticated users can:

* Create Product
* Update Product
* Delete Product
* View All Products

---

# Advanced Product Listing

The product listing API supports:

* Server-side Pagination
* Product Search
* Category Filtering
* Brand Filtering
* Price Range Filtering
* Sorting by latest products

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

Example Product

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

Backend runs on:

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

Middleware Used

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

Middleware

```
authMiddleware
```

---

## Update Product

PATCH

```
/api/product/:id
```

Middleware

```
authMiddleware
```

---

## Delete Product

DELETE

```
/api/product/:id
```

Middleware

```
authMiddleware
```

---

# View All Products (Pagination + Filters)

GET

```
/api/product/viewAllProducts
```

Middleware

```
authMiddleware
```

---

# Query Parameters

The API supports **pagination, search, and filtering**.

| Parameter | Description            | Example                 |
| --------- | ---------------------- | ----------------------- |
| page      | Page number            | `?page=1`               |
| limit     | Products per page      | `?limit=10`             |
| search    | Search product by name | `?search=iphone`        |
| category  | Filter by category     | `?category=electronics` |
| brand     | Filter by brand        | `?brand=apple`          |
| minPrice  | Minimum price          | `?minPrice=500`         |
| maxPrice  | Maximum price          | `?maxPrice=2000`        |

---

# Example API Requests

## Pagination

```
GET /api/product/viewAllProducts?page=2&limit=5
```

---

## Search Products

```
GET /api/product/viewAllProducts?search=macbook
```

---

## Category Filter

```
GET /api/product/viewAllProducts?category=Electronics
```

---

## Price Filter

```
GET /api/product/viewAllProducts?minPrice=500&maxPrice=2000
```

---

## Combined Query

```
GET /api/product/viewAllProducts?page=1&limit=10&search=iphone&category=Electronics&minPrice=500
```

---

# Example API Response

```json
{
  "message": "Products Fetched Successfully",
  "page": 1,
  "limit": 10,
  "totalProducts": 25,
  "totalPages": 3,
  "products": [
    {
      "_id": "69a30cdfad4e754f8d312220",
      "name": "iPhone 15",
      "description": "Apple flagship smartphone",
      "price": 1200,
      "brand": "Apple",
      "category": "Electronics",
      "stock": 10,
      "rating": 4.8
    }
  ]
}
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

Backend runs with **nodemon**

```
npx nodemon
```

The server automatically restarts when files change.

---

# Future Improvements

* Product images
* Product reviews
* Shopping cart system
* Order management system
* Payment gateway integration
* Admin dashboard analytics

---

# Author

**Itee Rajpurohit**
MERN Stack Developer

---

### Portfolio Highlight

Implemented **server-side pagination, search, and advanced filtering using MongoDB query operators**, improving scalability and performance of product listing APIs.
