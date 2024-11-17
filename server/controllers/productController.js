const Product = require('../models/productModel');  // Import the product model

// Controller function to get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();  // Retrieve all products from the database
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller function to get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);  // Retrieve product by ID
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller function to create a new product
const createProduct = async (req, res) => {
    try {
      const { name, price, stock } = req.body;
      const newProduct = await Product.create({ name, price, stock });
      res.status(201).json(newProduct);
    } catch (err) {
      console.error('Error creating product:', err);
      res.status(500).json({ message: 'Server error' });
    }
};

// Controller function to update a product by ID
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const updatedProduct = await product.update(req.body);
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller function to delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};