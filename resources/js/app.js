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

<<<<<<< HEAD:resources/assets/js/app.js
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

=======
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const files = require.context('./', true, /\.vue$/i)

// files.keys().map(key => {
//     return Vue.component(_.last(key.split('/')).split('.')[0], files(key))
// })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

>>>>>>> upstream/master:resources/js/app.js
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
