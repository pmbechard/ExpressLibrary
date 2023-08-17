const BookInstance = require('../models/bookinstance');
const Book = require('../models/book');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

// Display all
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  const allBookInstances = await BookInstance.find().populate('book').exec();
  res.render('bookinstance_list', {
    title: 'Book Instance List',
    bookinstance_list: allBookInstances,
  });
});

// Display one
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  const bookInstance = await BookInstance.findById(req.params.id)
    .populate('book')
    .exec();
  if (!bookInstance) {
    const err = new Error('Book copy not found.');
    err.status = 400;
    next(err);
  }
  res.render('bookinstance_detail', {
    title: `Book copy: ${bookInstance.book.title}`,
    bookinstance: bookInstance,
  });
});

// GET: Create form
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
  const allBooks = await Book.find({}, 'title').exec();
  res.render('bookinstance_form', {
    title: 'Create BookInstance',
    book_list: allBooks,
  });
});

// POST: Create form
exports.bookinstance_create_post = [
  body('book', 'Book must be specified').trim().isLength({ min: 1 }).escape(),
  body('imprint', 'Imprint must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('status').escape(),
  body('due_back', 'Invalid date.')
    .optional({ values: 'falsy' })
    .isISO8601()
    .toDate(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const bookInstance = new BookInstance({
      book: req.body.book,
      imprint: req.body.imprint,
      status: req.body.status,
      due_back: req.body.due_back,
    });
    if (!errors.isEmpty()) {
      res.render('bookinstance_form', {
        title: 'Create BookInstance',
        book_list: allBooks,
        selected_book: bookInstance._id,
        errors: errors.array(),
        bookinstance: bookInstance,
      });
      return;
    } else {
      await bookInstance.save();
      res.redirect(bookInstance.url);
    }
  }),
];

// GET: Delete form
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
  const bookInstance = await BookInstance.findById(req.params.id);
  if (bookInstance === null) res.redirect('/catalog/bookinstances');
  res.render('bookinstance_delete', {
    title: 'Delete Book Copy',
    bookinstance: bookInstance,
  });
});

// POST: Delete form
exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
  await BookInstance.findByIdAndRemove(req.body.bookinstanceid);
  res.redirect('/catalog/bookinstances');
});

// GET: Update form
exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
  const bookInstance = await BookInstance.findById(req.params.id)
    .populate('book')
    .exec();
  if (bookInstance === null) res.redirect('/catalog/bookinstances');
  res.render('bookinstance_form', {
    title: 'Update Book Instance',
    bookinstance: bookInstance,
    book_list: [bookInstance.book],
  });
});

// POST: Update form
exports.bookinstance_update_post = [
  body('imprint', 'Imprint must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('due_back', 'Invalid date.')
    .optional({ values: 'falsy' })
    .isISO8601()
    .toDate(),
  body('status').escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const bookInstance = new BookInstance({
      book: req.body.book,
      imprint: req.body.imprint,
      due_back: req.body.due_back,
      status: req.body.status,
      _id: req.params.id,
    });
    if (!errors.isEmpty()) {
      res.render('bookinstance_form', {
        title: 'Update Book Instance',
        bookinstance: bookInstance,
        book_list: [bookInstance.book],
      });
    } else {
      const updatedBookInstance = await BookInstance.findByIdAndUpdate(
        req.params.id,
        bookInstance,
        {}
      );
      res.redirect(updatedBookInstance.url);
    }
  }),
];
