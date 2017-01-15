const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const stylesheetsLoader = ExtractTextPlugin.extract({
  fallbackLoader: 'style-loader',
  loader: 'css-loader?modules&localIdentName=[hash:base64]'
});
const stylesheetsPlugin = new ExtractTextPlugin('[hash].css');
const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: 'index.html' });
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'false')),
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
  }
});
const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } });
const compressionPlugin = new CompressionPlugin();

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    publicPath: '/',
    filename: '[hash].js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'cheap-source-map',
  plugins: [
    stylesheetsPlugin,
    htmlWebpackPlugin,
    definePlugin,
    uglifyPlugin,
    compressionPlugin
  ],
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src')]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.css$/, loader: stylesheetsLoader },
      { test: /\.scss$/, loader: `${stylesheetsLoader}'!sass` },
      { test: /\.sass$/, loader: `${stylesheetsLoader}'!sass?indentedSyntax=sass` },
      { test: /\.less$/, loader: `${stylesheetsLoader}'!less` },
      { test: /\.html$/, loader: 'html-loader' }
    ]
  }
};
