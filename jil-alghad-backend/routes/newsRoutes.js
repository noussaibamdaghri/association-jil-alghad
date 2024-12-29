const express = require('express');
const {
    getNews,
    createNews,
    updateNews,
    deleteNews,
} = require('../controllers/newsController');

const router = express.Router();

router.get('/', getNews);           // GET: /api/news
router.post('/', createNews);       // POST: /api/news
router.put('/:id', updateNews);     // PUT: /api/news/:id
router.delete('/:id', deleteNews);  // DELETE: /api/news/:id

module.exports = router;

