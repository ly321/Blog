const path=require('path');
module.exports = {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path:path.resolve(__dirname, "../dist"),
    },
  
    devtool: "source-map",
  
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    node: {
      fs: "empty"
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        {test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,loader: 'url-loader'},
        {
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // 将 JS 字符串生成为 style 节点
          }, {
              loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          }, {
              loader: "sass-loader" // 将 Sass 编译成 CSS
          }]
        },
        {test: /\.(png|jpeg|gif|jpg)$/,loader: 'url?limit=25000'},
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
  
    plugins:[
  ]
  };