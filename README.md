# 📚 BookAPI – Node.js + Express + MongoDB

A simple and clean **RESTful API** to manage a collection of books, built using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose**.  
Perfect for learning backend fundamentals like routing, CRUD operations, validation, and modular file structure — all without authentication.

---

## 🚀 Features

- 📖 Full CRUD for books (Create, Read, Update, Delete)
- ✅ Input validation using `express-validator`
- 🗂️ Modular structure with routes, controllers, and models
- 🧪 API tested with Hoppscotch / Postman

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- express-validator
- nodemon (for development)

---

## 📂 Folder Structure

BookAPI/
├── controllers/ # Request logic
│ └── bookController.js
├── models/ # Mongoose schema
│ └── bookModel.js
├── routes/ # API routes
│ └── bookRoutes.js
├── server.js # App entry point
├── package.json


---

## ⚙️ Getting Started

### 1. Clone the Repository and Install Dependencies

```bash
git clone https://github.com/DakshChauhan2005/BookAPI.git
cd BookAPI
npm install
npm run dev

---

📡 API Endpoints

| Method | Route        | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/books`     | Get all books           |
| GET    | `/books/:id` | Get a single book by ID |
| POST   | `/books`     | Add a new book          |
| PUT    | `/books/:id` | Update a book           |
| DELETE | `/books/:id` | Delete a book           |

