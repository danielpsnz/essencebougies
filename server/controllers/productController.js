const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

// Fetch all products
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// Fetch single product
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

// Add a new product
const createProduct = asyncHandler(async (req, res) => {
    const { name, lemma, description, category, scent, sizes, price, wax_weight, stock, imageURL} = req.body;

    // Check if the product already exists
    const productExists = await Product.findOne({ name });

    if (productExists) {
        res.status(400);
        throw new Error('Product already exists');
    }

    // Create new product
    const product = new Product({
        name,
        lemma, 
        description,
        category,
        scent,
        sizes, 
        price,
        wax_weight,
        stock,
        imageURL
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

    // {
    //     "name": "Vela de café tostado",
    //     "lemma": "No hay nada mejor que despertar con el aroma de los granos de café por la mañana.",
    //     "description": "Vela artesanal vertida a mano en un recipiente de cristal con un aroma rico y acogedor de café tostado, de ese que te tomas por la mañana, acentuado con notas de caramelo y crema. Fabricada con cera de soja y mecha de madera para una combustión limpia y crepitante.",
    //     "category": "Gourmand",
    //     "scent": "Café + Caramelo + Crema",
    //     "sizes": ["Estándar - 220g"],
    //     "price": 10.40,
    //     "wax_weight": 220,
    //     "stock": 0,
    //     "imagenURL": "https://example.com/product-image.jpg"
    //   }

// Update an existing product
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, stock } = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
        // Update fields
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        product.stock = stock || product.stock;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

// Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        // Usa deleteOne para eliminar el producto
        await Product.deleteOne({ _id: req.params.id });
        res.json({ message: 'Product removed' });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

// Function to search for products based on query parameters (like name, price range)
const searchProducts = asyncHandler(async (req, res) => {
    const { name, minPrice, maxPrice } = req.query;

    let query = {};

    if (name) {
        query.name = { $regex: name, $options: 'i' }; // Case-insensitive search
    }

    if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) {
            query.price.$gte = minPrice;
        }
        if (maxPrice) {
            query.price.$lte = maxPrice;
        }
    }

    const products = await Product.find(query);

    res.json(products);
});

// Function to update stock of a product (increment or decrement)
const updateProductStock = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity === 0) {
        res.status(400);
        throw new Error('Quantity is required to update stock');
    }

    const product = await Product.findById(id);

    if (product) {
        // Update the stock by adding the quantity (could be negative for decrement)
        product.stock += quantity;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    updateProductStock,
};
