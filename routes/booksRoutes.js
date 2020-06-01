const requireLogin = require('../middlewares/requireLogin');
const Book = require('../models/Book');

module.exports = (app) => {
  //Books routes
  app.get('/api/books', async (req, res) => {
    try {
      const books = await Book.find();
      if (!books) {
        return res
          .status(400)
          .json({ msg: 'There are no books for this user.' });
      }
      res.json(books);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error.');
    }
  });

  app.get('/api/mybooks', requireLogin, async (req, res) => {
    try {
      const books = await Book.find({ user: req.user.id });
      if (!books) {
        return res
          .status(400)
          .json({ msg: 'There are no books for this user.' });
      }
      res.json(books);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error.');
    }
  });

  app.post('/api/mybooks', requireLogin, async (req, res) => {
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
      res.json(book);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error.');
    }
  });

  app.patch('/api/mybooks/:id', async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (book.user.toString() !== req.user.id.toString())
        return res.status(401).send('UnAuthorized');
      const { name, email, picurl, price, location } = req.body;
      const updatedBook = Book.findOneAndUpdate(
        { id: req.params.id },
        {
          $set: {
            name,
            email,
            picurl,
            price,
            location,
          },
        }
      );
      res.json(updatedBook);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error.');
    }
  });

  app.delete('/api/mybooks/:id', async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (book.user.toString() !== req.user.id.toString())
        return res.status(401).send('UnAuthorized');
      const result = book.delete();
      res.json(result);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error.');
    }
  });
};
