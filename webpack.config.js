const path = require("path")
const webpack = require("webpack")
const webpackDevServer = require("webpack-dev-server")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "src", "App.tsx"),
  },
  devServer: {
    port: 1234,
    historyApiFallback: true,
    hot: true,
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      css: path.resolve(__dirname, "src", "css"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jpg$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
  ],
}
