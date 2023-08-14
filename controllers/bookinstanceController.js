const BookInstance = require('../models/bookinstance');
const asyncHandler = require('express-async-handler');

// Display all
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance List');
});

// Display one
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
});

// GET: Create form
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance create GET');
});

// POST: Create form
exports.bookinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance create POST');
});

// GET: Delete form
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance delete GET');
});

// POST: Delete form
exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance delete POST');
});

// GET: Update form
exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance update GET');
});

// POST: Update form
exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance update POST');
});
