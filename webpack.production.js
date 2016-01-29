const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const stylesheetsLoader = ExtractTextPlugin.extract('style-loader',
  '!css-loader?modules&localIdentName=[hash:base64]');
const stylesheetsPlugin = new ExtractTextPlugin('[hash].css');
const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: 'index.html' });
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'false')),
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
  }
});
const dedupePlugin = new webpack.optimize.DedupePlugin();
const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } });

module.exports = {
  context: `${__dirname}/src`,
  entry: './index',
  output: {
    filename: '[hash].js',
    path: `${__dirname}/dist`
  },
  devtool: 'cheap-source-map',
  debug: false,
  plugins: [stylesheetsPlugin, htmlWebpackPlugin, definePlugin, dedupePlugin, uglifyPlugin],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      { test: /\.css$/, loader: stylesheetsLoader },
      { test: /\.scss$/, loader: `${stylesheetsLoader}'!sass` },
      { test: /\.sass$/, loader: `${stylesheetsLoader}'!sass?indentedSyntax=sass` },
      { test: /\.less$/, loader: `${stylesheetsLoader}'!less` },
      { test: /\.html$/, loader: 'html-loader' }
    ]
  }
};
