const product = require('./product/product');

module.exports = (app) => {
  app.use('/products',product);
}