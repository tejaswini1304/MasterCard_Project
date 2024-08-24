const express = require('express');
const blogController = require('../controllers/blogController');
const authController = require('../controllers/authController');

const router = express.Router();

// Route to get all blog posts

router.get('/', blogController.getAllBlogs);
router.get('/featured-blog', blogController.getFeaturedBlog);


// Fetch a single blog post by ID
router.get('/:id', blogController.getBlogById);

// Route to create a new blog post (admin only)
// router.use(authController.protect);     //middleware applied for all below
router.post('/', blogController.createBlog);

// Route to delete a blog post (admin only)
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
