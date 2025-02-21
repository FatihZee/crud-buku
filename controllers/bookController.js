const Book = require('../models/bookModel');

// CREATE a new book
const createBook = async (req, res) => {
  const { title, author, year } = req.body;
  try {
    const book = await Book.create({ title, author, year });
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ a single book by id
const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE a book
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, year } = req.body;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      book.title = title;
      book.author = author;
      book.year = year;
      await book.save();
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a book
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      await book.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createBook, getAllBooks, getBookById, updateBook, deleteBook };
