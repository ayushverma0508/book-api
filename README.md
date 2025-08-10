# 📚 Book Management REST API

A simple REST API using **Node.js** and **Express.js** to manage books with CRUD operations (in-memory storage).

## 🚀 Endpoints
**GET /books** → Get all books
**POST /books** → Add a book  
  Body:
  json
  { "title": "Book Title", "author": "Author Name" }
PUT /books/:id → Update a book

DELETE /books/:id → Delete a book

🛠 Setup
bash
Copy
Edit
npm install
node server.js
Runs on: http://localhost:3000

📌 Test
Use Postman to send GET, POST, PUT, DELETE requests with JSON body.
