const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  
  productName: { type: String, required: true },
  productCode: { type: String, required: true },
  releaseDate: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  starRating: { type: Number, required: true },
  isVisible: { type: Boolean, default: true }
});
module.exports = mongoose.model('Product', ProductSchema);
