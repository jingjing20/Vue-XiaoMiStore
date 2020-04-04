const express = require('express')
const product = express.Router()

const productModel = require('../../models/product');

product.get('/', (req, res) => {
  let { categoryId, pageSize } = req.query;
  console.log('---------')
  console.log(categoryId)
  console.log(pageSize)
  productModel.find({
    // categoryId: categoryId,
  })
    // .limit(pageSize)
    .exec((err, jing) => {
      res.json({
        status: 0,
        data: jing,
      })
    })
})

module.exports = product;