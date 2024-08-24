// controllers/blogController.js
const Blog = require('../models/blogSchema');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// Get all blogs
exports.getAllBlogs = catchAsync(async (req, res, next) => {
    const blogs = await Blog.find();
    res.status(200).json({
        status: 'success',
        results: blogs.length,
        data: {
            blogs
        }
    });
});

// Get all blogs
exports.getFeaturedBlog = catchAsync(async (req, res, next) => {
    const blogs = await Blog.findOne({ featured: true });
    if (!blogs) {
        blogs = await Blog.findOne();
    }
    res.status(200).json({
        status: 'success',
        results: blogs.length,
        data: {
            blogs
        }
    });
});

//get specific blog 
exports.getBlogById = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    // Find the blog post by ID
    const blog = await Blog.findById(id);

    // If no blog post is found, return an error
    if (!blog) {
        return next(new AppError('No blog post found with that ID', 404));
    }

    // Send the blog post data as response
    res.status(200).json({
        status: 'success',
        data: {
            blog
        }
    });
});

// Create a new blog
exports.createBlog = catchAsync(async (req, res, next) => {
    const newBlog = await Blog.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            blog: newBlog
        }
    });
});

// Delete a blog
exports.deleteBlog = catchAsync(async (req, res, next) => {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
        return next(new AppError('No blog found with that ID', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
});
