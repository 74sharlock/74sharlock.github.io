import Vue from 'vue';
import router from './routes';
import App from 'views/layout/app';

import UiLayoutComponents from 'balm-ui-lite/components/layout';
import UiButton from 'balm-ui-lite/components/button';

import $store from 'plugins/$store';
import $http from 'plugins/$http';

for (let key in UiLayoutComponents) {
  let Component = UiLayoutComponents[key];
  Vue.component(Component.name, Component);
}

Vue.component(UiButton.name, UiButton);

Vue.use($store);
Vue.use($http);

new Vue({
  components: { App },
  el: '#app',
  template: `<app />`,
  router
});
