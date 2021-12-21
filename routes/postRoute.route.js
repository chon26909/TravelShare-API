const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.getAllPost);
router.post('/', postController.addPost);
router.get('/search', postController.searchPostByText);

module.exports = router;