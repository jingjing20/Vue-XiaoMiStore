const express = require('express')
const images = express.Router()

const imagesModel = require('../../models/images')

images.get('/', (req, res) => {
  imagesModel.find()
    .exec((err, jing) => {
      res.json({
        status: 0,
        data: jing,
      })
    })
})

module.exports = images