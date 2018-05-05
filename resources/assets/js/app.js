require('./bootstrap');

window.Vue = require('vue');

Vue.mixin({
  mounted() {
    console.log(`Component ${this.$options.name} mounted.`);
  },
});

Vue.component(
  'example-component',
  require('./components/ExampleComponent.vue'),
);

const app = new Vue({
  el: '#app',
});
