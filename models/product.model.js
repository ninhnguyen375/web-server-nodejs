const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
   name: String,
   image: String,
   describe: String,
   price: String
});

const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;