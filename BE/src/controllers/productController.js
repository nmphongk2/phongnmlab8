const Product = require('../models/product');

// Create a new post
exports.createSP = async (req, res) => {
  try {
    const post = new Product(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    console.error(error); // Thêm dòng này để ghi lỗi ra console
    res.status(400).send(error);
  }
};

// Get all posts
exports.getAllSP = async (req, res) => {
  try {
    const posts = await Product.find();
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Product.findById(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a post by ID
exports.updateSP = async (req, res) => {
  try {
    const post = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a post by ID
exports.deleteSP = async (req, res) => {
  try {
    const post = await Product.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};
