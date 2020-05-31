const proxy = require("http-proxy-middleware")
module.exports = function(app){
  app.use(
    '/api',
    proxy({
      "target":'http://m.shihuo.cn',
      "pathRewrite":{
        "^/api":""
      },
      "changeOrigin":true,
    })
  )
  app.use(
    '/be',
    proxy({
      "target":'http://localhost:3333',
      "pathRewrite":{
        "^/be":""
      },
      "changeOrigin":true,
    })
  )
}