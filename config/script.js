const entry = require('./entry');
const { resolve } = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry,
  loaders: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  ],
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    components: resolve(__dirname, '../app/scripts/views/components'),
    views: resolve(__dirname, '../app/scripts/views'),
    plugins: resolve(__dirname, '../app/scripts/plugins'),
    images: resolve(__dirname, '../app/images'),
    data: resolve(__dirname, '../app/data'),
    directives: resolve(__dirname, '../app/scripts/directives')
  },
  plugins: [new VueLoaderPlugin()]
};
