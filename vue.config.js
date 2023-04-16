const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // base:'/GOODSPROJECT/',
  transpileDependencies: true
})

// module.exports = {
//   publicPath:'/GOODSPROJECT/'
// }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/GOODSPROJECT/'
    : '/'
}