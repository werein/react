const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const stylesheetsLoaders = [{
  loader: 'css-loader',
  options: {
    modules: true,
    localIdentName: '[path]-[local]-[hash:base64:3]',
    sourceMap: true
  }
}
];

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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: stylesheetsLoaders
        })
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [...stylesheetsLoaders, {
            loader: 'sass-loader'
          }]
        })
      }, {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [...stylesheetsLoaders, {
            loader: 'sass-loader',
            options: {
              indentedSyntax: 'sass',
            }
          }]
        })
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [...stylesheetsLoaders, {
            loader: 'less-loader'
          }]
        })
      }
    ]
  }
};
