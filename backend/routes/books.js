const express = require('express');
const router = express.Router();

const {
  handleUploadBook,
  handleShowBooks,
  handleSingleBook,
  handleBestSellerBooks,
  handleUpdateBooks,
  handleDeleteBook,
  handleFilterByCategory
} = require('../controllers/bookController');

router.post('/upload', handleUploadBook);
router.get('/all-Books', handleShowBooks);
router.get('/best-sellers', handleBestSellerBooks);
router.get('/:id', handleSingleBook);

router.patch('/update/:id', handleUpdateBooks);
router.delete('/delete/:id', handleDeleteBook);
router.get('/filter-category',handleFilterByCategory );

module.exports = router;
