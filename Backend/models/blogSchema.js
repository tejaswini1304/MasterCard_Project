const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Blog schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true
  },
  slug: {
    type: String,
    required: [true, "Slug is required"],
    unique: true, // Ensure unique slugs for URLs
    trim: true,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, "Content is required"], // Main content of the blog post
    minlength: 20 // Minimum length for the content
  },
  image: {
    type: String,
  },
  readTime: {
    type: String
  },
  featured: {
    type: Boolean
  },
  publishedAt: {
    type: Date,
    default: Date.now // Default to the current date
  }
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Blog model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
