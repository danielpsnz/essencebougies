const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lemma: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: false,
    },
    scent: {
        type: String,
        required: false,
    },
    sizes: {
        type: [String], // Array de tamaños disponibles
        required: false,
    },
    price: {
        type: [Number],
        required: true,
    },
    wax_weight: {
        type: [Number], // Peso de la cera en gramos
        required: false,
    },
    stock: {
        type: [Number],
        required: false,
        default: [0],
    },
    imageURL: {
        type: [String],
        required: false,
        default: 'https://example.com/default-image.jpg',
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;