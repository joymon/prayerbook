var webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: {
    app: "./src/JS/app.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      //   name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
        //     vendor: {
        //       test: "dist/vendor.bundle.js",
        //       name: "vendor",
        //       chunks: "initial"
        //     }
      }
    }
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
        from: "src/data",
        to: "./data",
        flatten: true
      },
      {
        from: "src/images",
        to: "./images",
        flatten: true
      }
    ])
  ],
  devServer: {
    contentBase: "dist"
  }
};
