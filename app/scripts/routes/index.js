import Vue from 'vue';
import VueRouter from 'vue-router';

import baseRoutes from './base';

Vue.use(VueRouter);

let routes = baseRoutes.concat([]);

export default new VueRouter({
  routes
});
