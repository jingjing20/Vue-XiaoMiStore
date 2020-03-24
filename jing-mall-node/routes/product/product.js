const express = require('express')
const product = express.Router()

const productModel = require('../../models/product');

product.get('/', (req,res) => {
  // const categoryId = req.params.categoryId;
  console.log('---------')
  // console.log(categoryId)
  productModel.find({
    // categoryId
  })
  .exec((err, product) => {
    res.json(product)
  })
})

module.exports = product;