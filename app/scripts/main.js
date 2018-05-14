import Vue from 'vue';
import router from './routes';
import App from 'views/layout/app';

import UiButton from 'balm-ui-lite/components/button';
import UiSpinner from 'balm-ui-lite/components/spinner';

import $store from 'plugins/$store';
import $http from 'plugins/$http';
import $bus from 'plugins/$bus';

Vue.component(UiButton.name, UiButton);
Vue.component(UiSpinner.name, UiSpinner);

Vue.use($store);
Vue.use($http);
Vue.use($bus);

new Vue({
  components: { App },
  el: '#app',
  template: `<app />`,
  router
});
