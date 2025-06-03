const requireLogin = require('../middlewares/requireLogin');
const { body, validationResult } = require('express-validator');
const booksController = require('../controllers/booksController');

module.exports = (app) => {
  //Books routes
  app.get('/api/books', booksController.getAllBooks);

  app.get('/api/mybooks', requireLogin, booksController.getMyBooks);

  app.get('/api/mybooks/:id', requireLogin, booksController.getBookById);

  app.post(
    '/api/mybooks',
    requireLogin,
    [
      body('name').notEmpty().withMessage('Name is required'),
      body('email').isEmail().withMessage('Valid email is required'),
      body('picurl').notEmpty().withMessage('Picture URL is required'),
      body('price').isNumeric().withMessage('Price must be a number'),
      body('location').notEmpty().withMessage('Location is required'),
    ],
    booksController.createBook
  );

  app.patch(
    '/api/mybooks/:id',
    requireLogin,
    [
      body('name').optional().notEmpty(),
      body('email').optional().isEmail(),
      body('picurl').optional().notEmpty(),
      body('price').optional().isNumeric(),
      body('location').optional().notEmpty(),
    ],
    booksController.updateBook
  );

  app.delete('/api/mybooks/:id', requireLogin, booksController.deleteBook);
};
