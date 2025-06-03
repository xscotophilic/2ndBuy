// Controller for book-related logic
const Book = require('../models/Book');
const { validationResult } = require('express-validator');

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    if (!books || books.length === 0) {
      return res.status(404).json({ msg: 'No books found.' });
    }
    res.json(books);
  } catch (error) {
    next(error);
  }
};

exports.getMyBooks = async (req, res, next) => {
  try {
    const books = await Book.find({ user: req.user.id });
    if (!books || books.length === 0) {
      return res.status(404).json({ msg: 'No books found for this user.' });
    }
    res.json(books);
  } catch (error) {
    next(error);
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found.' });
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
};

exports.createBook = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { name, email, picurl, price, location } = req.body;
    const book = new Book({
      name,
      email,
      picurl,
      price,
      location,
      user: req.user.id,
    });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

exports.updateBook = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found.' });
    }
    if (book.user.toString() !== req.user.id.toString()) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }
    const { name, email, picurl, price, location } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { name, email, picurl, price, location },
      { new: true }
    );
    res.json(updatedBook);
  } catch (error) {
    next(error);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found.' });
    }
    if (book.user.toString() !== req.user.id.toString()) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }
    await book.deleteOne();
    res.json({ msg: 'Book deleted successfully.' });
  } catch (error) {
    next(error);
  }
};
