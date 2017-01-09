const entry = require('./entry');

module.exports = {
  entry,
  loaders: [{
    test: /\.vue$/,
    loader: 'vue'
  }, {
    test: /\.scss$/,
    loader: 'sass'
  }
  /*  , {
    test: /balm-ui.src.*?js$/,
    loader: 'babel'
  }*/
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],
  alias: {}
};
