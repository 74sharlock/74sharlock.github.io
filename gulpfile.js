const balm = require('balm');
const config = require('./balmrc');
const server = require('./config/server');
const scripts = require('./config/script');

balm.config = {
  server,
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts'
    }
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['last 3 iOS versions']
  },
  scripts,
  cache: true,
  assets: {}
};

balm.go(function(mix) {
  if (balm.config.production) {
    mix.copy('./node_modules/balm-ui-lite/font/*.*', './fiction/font/');
  }
});
