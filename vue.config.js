module.exports = {
  devServer: {
    proxy: {
      '/apis': {    //将www.example.com映射为/apis
        target: 'http://192.168.0.33:7777',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/apis': ''   //需要rewrite的,
        }
      }
    }
  }
}
