require('./bootstrap');
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import VueRouter from 'vue-router';
import VueBem from 'vue-bem';

const debug = true;

window.Vue = require('vue');
Vue.use(VueRouter);
Vue.use(VueBem);

Vue.mixin({
  mounted() {
    console.log(`Component ${this.$options.name} mounted.`);
  },
});

const requireComponent = require.context(
  './components',
  true,
  /Base[A-Z]\w+\.(vue|js)$/,
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
  if (debug) console.log(componentName);
});

const app = new Vue({
  el: '#app',
});

/*
const routes = [
  {
    path: '/page-2',
    component: Vue.component('BasePage2'),
    name: 'page-2',
  },
];

const router = new VueRouter({
  routes,
});

const routerApp = new Vue({
  router,
}).$mount('#router_app');
*/
