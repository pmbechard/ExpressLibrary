const Author = require('../models/author');
const asyncHandler = require('express-async-handler');

// Display all
exports.author_list = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Author list');
});

// Display one
exports.author_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
});

// GET: Create form
exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Author create GET');
});

// POST: Create form
exports.author_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Author create POST');
});

// GET: Delete form
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Author delete GET');
});

// POST: Delete form
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Author delete POST');
});

// GET: Update form
exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Author update GET');
});

// POST: Update form
exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Author update POST');
});
