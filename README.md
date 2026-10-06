# Am Bookstore

A full-stack e-commerce web application for browsing, searching, and managing books. Built with the MERN stack (MongoDB, Express.js, React, Node.js) and Tailwind CSS.

---

## Features

- **Authentication & Authorization:** User registration and login utilizing JSON Web Tokens (JWT) and bcrypt password hashing.
- **Role-Based Access Control (RBAC):** Distinct permission levels for standard customers and administrators.
- **Catalog Management (Admin):** CRUD operations for adding, editing, and removing book listings.
- **Search & Pagination:** Keyword search with server-side pagination for catalog browsing.
- **Cart & Order Flow:** Persistent cart state management across navigation and order placement simulation.
- **Responsive Interface:** Component layout adapted for desktop, tablet, and mobile viewports using Tailwind CSS.

---

## Tech Stack & Architecture

- **Frontend:** React.js, React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js (REST API architecture)
- **Database:** MongoDB via Mongoose ODM
- **Security:** JWT authentication, CORS handling, bcrypt password encryption

---

## Project Structure

```text
Am-Bookstore/
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # Business logic for books, users, and orders
│   ├── middleware/      # JWT verification and admin role guards
│   ├── models/          # Mongoose data schemas
│   ├── routes/          # API route definitions
│   └── server.js        # Express application entry point
└── frontend/
    ├── public/
    └── src/
        ├── components/  # Reusable UI components
        ├── pages/       # Route views (Home, Catalog, Cart, Dashboard)
        └── App.jsx
```

---

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB instance (local or Atlas)

### 1. Backend Setup
```bash
cd backend
npm install
cp .env.example .env     # Set PORT, MONGO_URI, and JWT_SECRET
npm run dev
```

### 2. Frontend Setup
```bash
cd ../frontend
npm install
npm start
```
The client will run at `http://localhost:3000`.

---

## Demo Accounts

Pre-configured credentials for evaluation:
- **Admin:** `admin@ambookstore.com` / `admin123`
- **Customer:** `demo@user.com` / `user123`
