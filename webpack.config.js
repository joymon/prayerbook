var webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  // entry: path.resolve(__dirname, "src/JS/app.js")
  entry: "./src/js/bootstrap.ts",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js"]
  },

  optimization: {
    //minimize: false,
    splitChunks: {
      chunks: "all",
      //   name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      { test: /\.css$/, loaders: ["style-loader", "css-loader"] }
    ]
  },
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'dist/vendor.bundle.js'}),
    new CopyWebpackPlugin([
      {
        from: "src/views/*.html",
        to: "./views",
        flatten: true
      },
      {
        from: "src/views/modals/*.html",
        to: "./views/modals",
        flatten: true
      },
      {
        from: "src/*.html",
        to: ".",
        flatten: true
      },
      {
        from: "src/*.js*",
        to: ".",
        flatten: true
      },
      {
        from: "src/data/*.json",
        to: "./data",
        flatten: true
      },
      {
        from: "src/data/prayers/*.*",
        to: "./data/prayers",
        flatten: true
      },
      {
        from: "src/data/songs/*.*",
        to: "./data/songs",
        flatten: true
      },
      {
        from: "src/images",
        to: "./images",
        flatten: true
      },
      {
        from: "src/*.ico",
        to: ".",
        flatten: true
      }
    ])
  ],
  devServer: {
    contentBase: "dist"
  }
};
