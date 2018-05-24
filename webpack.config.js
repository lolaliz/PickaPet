const webpack = require("webpack");
const path = require("path");
const htmlWebPack = require("html-webpack-plugin");

module.exports = {
  entry:path.join(__dirname,"./src/index.js"),
  output:{
    path: path.join(__dirname,"./public"),
    filename: "index_bundle.js"
  },
  devtool:"inline-source-map",
  devServer:{
    contentBase: path.join(__dirname,"./public"),
    compress: true,
    hot: true,
    open: true,
    proxy:{
      "/Api":"http://localhost:3000"
    }
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use:[
          {loader: "babel-loader"}
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:[
          {loader:"babel-loader"}
        ]
      },
      {
        test:/\.css$/,
        use:[
          {loader:"style-loader"},
          {loader:"css-loader"}
        ]
      },
      {
        test:/\.(jpg|png|gif|svg)$/,
        use:[
          {loader:"file-loader"}
        ]
      }
    ]
  },
  plugins:[
    new htmlWebPack({
      template:path.join(__dirname,"./src/index.html"),
      filename:"index.html",
      inject: "body"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}