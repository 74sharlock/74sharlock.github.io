var balm = require('balm');
var config = require('./balmrc');
var server = require('./config/server');
var scripts = require('./config/script');

balm.config = {
  server,
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'css',
      js: 'js'
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
    // filter assets svg
    mix.remove('./dist/a/img/*.svg');
    mix.copy('./app/images/*.svg', './dist/a/img');
    // for static
    mix.publish();
    // for html
    Object.keys(config.publish).forEach(function(key) {
      mix.publish(key, config.publish[key].target, config.publish[key].option || {});
    });
  }
});
