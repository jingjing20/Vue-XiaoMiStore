module.exports = {
  devServer: {
    // host: 'localhost',
    // port: 8080,
    proxy: {
      '/api': {
        // target: 'http://mall-pre.springboot.cn',
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

