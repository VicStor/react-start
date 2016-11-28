const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src/');
const sassLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true
    }
  },
  {
    loader: 'postcss-loader'
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      indentedSyntax: true
    }
  }
]

module.exports = {
  entry: {
    app: [
      `${APP_DIR}/index.js`,
      `${APP_DIR}/scss/index.scss`
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: '[name].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: APP_DIR,
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: sassLoaders
        }),
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [
      'node_modules',
      path.resolve(APP_DIR)
    ],
    extensions: ['.js', '.jsx', '.scss', '.css']
  }
};
