# User Management API

A scalable User Management API built using Node.js, Express.js, TypeScript, PostgreSQL, MongoDB, JWT Authentication, and Role-Based Access Control (RBAC).

---

## Project Overview

This project follows a layered architecture and repository pattern for better maintainability and scalability.

The application uses a Dual Database Architecture:

### PostgreSQL
Used for:

- User Management
- Authentication
- Role Management
- CRUD Operations

### MongoDB
Used for:

- Audit Logs
- Activity Tracking
- User Action Monitoring

This hybrid approach combines the reliability of SQL databases with the flexibility of NoSQL databases.

---

## Tech Stack

### Backend

- Node.js
- Express.js
- TypeScript

### SQL Database

- PostgreSQL
- TypeORM

### NoSQL Database

- MongoDB
- Mongoose

### Authentication & Security

- JWT (JSON Web Token)
- bcrypt

### Utilities

- dotenv
- cors
- nodemon

---

## Architecture

```text
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Repositories
   │
   ├── PostgreSQL (Users)
   │
   └── MongoDB (Audit Logs)
```

---

## Project Structure

```text
src
│
├── config
│   ├── mongo.config.ts
│   └── postgres.config.ts
│
├── controllers
│   ├── auth.controller.ts
│   └── user.controller.ts
│
├── interfaces
│   └── user.interface.ts
│
├── middleware
│   ├── auth.middleware.ts
│   ├── role.middleware.ts
│   └── error.middleware.ts
│
├── models
│   ├── mongo
│   │   └── auditlog.model.ts
│   │
│   └── sql
│       └── user.entity.ts
│
├── repositories
│   └── user.repository.ts
│
├── routes
│   ├── auth.routes.ts
│   └── user.routes.ts
│
├── services
│   ├── auth.service.ts
│   └── user.service.ts
│
├── utils
│   ├── bcrypt.ts
│   └── jwt.ts
│
├── app.ts
└── server.ts
```

---

## Folder Responsibilities

### config

Contains database configurations.

- PostgreSQL Connection
- MongoDB Connection

### controllers

Handles incoming HTTP requests and sends responses.

- User Controller
- Authentication Controller

### services

Contains business logic.

- Registration Logic
- Login Logic
- User Management Logic

### repositories

Handles database interactions.

- Create User
- Update User
- Delete User
- Fetch Users

### middleware

Request processing and validation.

- JWT Authentication
- Role Authorization
- Error Handling

### models

Database schemas and entities.

#### PostgreSQL

Stores user information.

#### MongoDB

Stores audit logs and user activities.

### utils

Reusable helper functions.

- Password Hashing
- JWT Generation
- JWT Verification

---

## Features

### Authentication

- User Registration
- User Login
- Password Hashing
- JWT Token Generation

### User Management

- Create User
- Get All Users
- Get User By ID
- Update User
- Delete User

### Authorization

- Role-Based Access Control (RBAC)
- Protected Routes

### Logging

- Audit Logging using MongoDB
- User Activity Tracking

### Error Handling

- Centralized Error Middleware
- Proper HTTP Status Codes

---

## Authentication Flow

```text
Register User
      │
      ▼
Hash Password
      │
      ▼
Save User In PostgreSQL
      │
      ▼
Create Audit Log In MongoDB
```

---

```text
Login User
     │
     ▼
Validate Email
     │
     ▼
Compare Password
     │
     ▼
Generate JWT Token
     │
     ▼
Return Access Token
```

---

## API Endpoints

### Authentication

#### Register

```http
POST /api/auth/register
```

#### Login

```http
POST /api/auth/login
```

---

### Users

#### Get All Users

```http
GET /api/users
```

#### Get User By ID

```http
GET /api/users/:id
```

#### Update User

```http
PUT /api/users/:id
```

#### Delete User

```http
DELETE /api/users/:id
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=root
POSTGRES_DB=userdb

MONGO_URI=mongodb://localhost:27017/usermanagement

JWT_SECRET=your_secret_key
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/user-management-api.git
```

Move into the project directory

```bash
cd user-management-api
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

---

## Database Design

### PostgreSQL - Users Table

| Column | Type |
|----------|----------|
| id | Integer |
| name | String |
| email | String |
| password | String |
| role | String |
| createdAt | Timestamp |
| updatedAt | Timestamp |

---

### MongoDB - Audit Logs Collection

| Field | Type |
|----------|----------|
| action | String |
| userId | Number |
| timestamp | Date |
| metadata | Object |

---

## Security Features

- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes
- Role-Based Authorization
- Centralized Error Handling

---

## Future Improvements

- Refresh Token Authentication
- Email Verification
- Forgot Password
- Swagger Documentation
- Docker Support
- Redis Caching
- Unit Testing
- CI/CD Pipeline

---

## Author

**Sarju Mhmd**

Full Stack MERN Developer

### Skills

- JavaScript
- TypeScript
- Node.js
- Express.js
- MongoDB
- PostgreSQL
- React.js
- MERN Stack

---