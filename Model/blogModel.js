const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 500,
  },
  category: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;
