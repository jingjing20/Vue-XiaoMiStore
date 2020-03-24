const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: Number,
  categoryId: Number,
  name: String,
  subtitle: String,
  mainImage: String,
  price: Number,
  status: Number,
  imageHost: String
})

const Product = mongoose.model("product", productSchema)

module.exports = Product;