const express = require("express");
const app = express();
const PORT = 3000;

// Middleware: request ka JSON data samajhne ke liye
app.use(express.json());

// Apne books ka temporary data (memory me store)
let books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "Atomic Habits", author: "James Clear" }
];

// GET - Saare books dekhna
app.get("/books", (req, res) => {
    res.json(books);
});

// POST - Naya book add karna
app.post("/books", (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: "Title and Author required" });
    }
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT - Book update karna
app.put("/books/:id", (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const book = books.find(b => b.id === parseInt(id));

    if (!book) return res.status(404).json({ error: "Book not found" });

    if (title) book.title = title;
    if (author) book.author = author;

    res.json(book);
});

// DELETE - Book delete karna
app.delete("/books/:id", (req, res) => {
    const { id } = req.params;
    books = books.filter(b => b.id !== parseInt(id));
    res.json({ message: "Book deleted" });
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});