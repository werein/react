const webpack = require('webpack');

module.exports = function(options) {
  if(options.development){
    // definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
    // Set __DEV__ from NODE_ENV or true in development mode
    var definePlugin = new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV == 'development' || 'true'))
    });
    // Use React transformer for hot reloading
    var jsLoaderPlugins = ['react-transform', {
      transforms: [
        {
          transform: 'react-transform-hmr',
          imports: ['react'],
          locals: ['module'],
        }, {
          transform: 'react-transform-catch-errors',
          imports: ['react', 'redbox-react'],
        },
      ],
    }];
  } else {
    // Set __DEV__ from NODE_ENV or false in production mode
    var definePlugin = new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV == 'development' || 'false'))
    });
    // Don't load another plugins for JS files
    var jsLoaderPlugins = null;
  };

  var cssLoader = 'style-loader!css-loader?modules&localIdentName=[path]-[local]-[hash:base64]';
  var scssLoader = cssLoader + '!sass';
  var sassLoader = scssLoader + '?indentedSyntax=sass';
  var lessLoader = cssLoader + '!less';

  return {
    context: __dirname + '/src',
    entry: {
      javascript: './index.js',
      html: './index.html'
    },
    output: {
      filename: 'app.js',
      path: __dirname + '/dist'
    },
    devtool: options.devtool || 'eval',
    debug: options.debug || true,
    plugins: [ definePlugin ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query:
          {
            presets:['react', 'es2015', 'stage-0']
          },
          plugins: [jsLoaderPlugins]
        },
        { test: /\.css$/, loader: cssLoader },
        { test: /\.scss$/, loader: scssLoader },
        { test: /\.sass$/, loader: sassLoader },
        { test: /\.less$/, loader: lessLoader },
        { test: /\.html$/, loader: 'file?name=[name].[ext]' }
      ]
    },
  }
};
