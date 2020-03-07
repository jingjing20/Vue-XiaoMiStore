 module.exports = {
   devServer: {
     host: 'localhost',
     port: 8000,
    //  加一个api用于请求的拦截 再用pathRewrite把api干掉
     proxy: {
       '/api': {
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite: {
          '/api': ''
        }
       }
     }
   }
 }