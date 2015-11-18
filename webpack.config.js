module.exports = function(options) {
  if(options.development){
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
    // Don't load another plugins for JS files
    var jsLoaderPlugins = null;
  };

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
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules&localIdentName=[hash:base64]',
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]'
        }
      ]
    },
  }
};
