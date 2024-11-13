const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  imgSrc: String,
  badge: String,
  location: String,
  cameraCount: Number,
  videoCount: Number,
  price: String,
  pricePeriod: String,
  title: String,
  description: String,
  bedrooms: Number,
  bathrooms: Number,
  squareFt: Number,
  authorImg: String,
  authorName: String,
  authorTitle: String,
});

module.exports = mongoose.model("CartItem", cartItemSchema);
