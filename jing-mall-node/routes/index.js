const product = require('./product/product');
const images = require('./images/image');

module.exports = (app) => {
  app.use('/products', product);
  app.use('/swiper', images);
}