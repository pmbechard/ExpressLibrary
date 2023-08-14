const Book = require('../models/book');
const asyncHandler = require('express-async-handler');

// Home page
exports.index = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Site Home Page');
});

// Display all
exports.book_list = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book list');
});

// Display one
exports.book_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
});

// GET: Create form
exports.book_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book create GET');
});

// POST: Create form
exports.book_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book create POST');
});

// GET: Delete form
exports.book_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book delete GET');
});

// POST: Delete form
exports.book_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book delete POST');
});

// GET: Update form
exports.book_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book update GET');
});

// POST: Update form
exports.book_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book update POST');
});
