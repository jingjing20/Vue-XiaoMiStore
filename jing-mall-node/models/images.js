const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imagesSchema = new Schema({
  id: Number,
  img: String
}, { collation: 'images' })

const imageModel = mongoose.model('images', imagesSchema)

module.exports = imageModel