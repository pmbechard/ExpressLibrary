const Genre = require('../models/genre');
const asyncHandler = require('express-async-handler');

// Display all
exports.genre_list = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Genre list');
});

// Display one
exports.genre_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`);
});

// GET: Create form
exports.genre_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Genre create GET');
});

// POST: Create form
exports.genre_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Genre create POST');
});

// GET: Delete form
exports.genre_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Genre delete GET');
});

// POST: Delete form
exports.genre_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Genre delete POST');
});

// GET: Update form
exports.genre_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Genre update GET');
});

// POST: Update form
exports.genre_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Genre update POST');
});
