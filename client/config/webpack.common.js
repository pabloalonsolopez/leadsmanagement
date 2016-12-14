var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
var helpers = require("./helpers")

module.exports = {
  entry: {
    "polyfills": "./client/app/polyfills.ts",
    "vendor": "./client/app/vendor.ts",
    "app": "./client/app/main.ts"
  },

  resolve: {
    extensions: ["", ".ts", ".js", ".scss"]
  },
  
  postcss: {
    plugins: [
      require("autoprefixer")
    ]
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ["awesome-typescript-loader?configFileName=client/tsconfig.json", "angular2-template-loader", "angular2-router-loader"]
      },
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap!postcss?sourceMap!sass?sourceMap")
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/images/[name].[hash].[ext]',
        exclude: helpers.root("client", "assets", "images", "icons")
      },
      {
        test: /\.svg?$/,
        loader: 'svg-sprite!svgo',
        include: helpers.root("client", "assets", "images", "icons")
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ["app", "vendor", "polyfills"]
    }),

    new ExtractTextPlugin("assets/styles/[name].[hash].css"),

    new FaviconsWebpackPlugin({
      logo: "./client/assets/images/favicon.png",
      prefix: "assets/images/favicons/"
    }),

    new HtmlWebpackPlugin({
      template: "client/index.html"
    })
  ],

  output: {
    path: helpers.root("dist", "client"),
    publicPath: "/",
    filename: "app/[name].[hash].js",
    chunkFilename: "app/[id].[hash].chunk.js"
  }
}