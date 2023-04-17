
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: String,
    price: { type: Number, min: [0, 'Wrong Price'], required: true },
    stock: { type: Number, min: [0, 'Low Stock Quantity'] },
    brand: { type: String, required: [true, 'Input any Brand name'] },


}); 

exports.Product = mongoose.model('products', productSchema);  