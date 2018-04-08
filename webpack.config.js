const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  devtool: 'inline-source-map',
  entry: {
    app: path.resolve(__dirname, 'src/index'),
    vendor: [
      "babel-polyfill",
      "ramda",
      "react",
      "react-bootstrap",
      "react-burger-menu",
      "react-dom",
      "react-grid-gallery",
      "react-localize-redux",
      "react-redux",
      "react-router",
      "react-router-redux",
      "redux",
      "redux-thunk",
    ],
  },
  target: 'web',
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.js',
    publicPath: path.join(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 1234,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),
    new CopyWebpackPlugin([{ from: 'src/index.html' }]),
    new WriteFilePlugin(),
    //new CleanWebpackPlugin('dist')
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)|assets/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    }, {
      test: /\.(jpg|png|svg)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[hash].[ext]",
        },
      },
    }, {
      test: /(\.css)$/, use: ['style-loader', 'css-loader?url=false']
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader'
    }, {
      test: /\.(woff|woff2)$/, use: 'url-loader?prefix=font/&limit=5000'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }],
  }
};
