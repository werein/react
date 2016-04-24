const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const stylesheetsLoader =
  'style-loader!css-loader?modules&localIdentName=[path]-[local]-[hash:base64:3]';
const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: 'index.html' });
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'true'))
});

module.exports = {
  context: `${__dirname}/src`,
  entry: './index',
  output: {
    filename: '[hash].js',
    path: `${__dirname}/dist`
  },
  devtool: 'source-map',
  debug: true,
  plugins: [htmlWebpackPlugin, definePlugin],
  resolve: {
    modulesDirectories: ['node_modules', `${__dirname}/src`]
  },
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
  },
  devServer: {
    historyApiFallback: true,
  }
};
