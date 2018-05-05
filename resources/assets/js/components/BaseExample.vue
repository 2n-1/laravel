<template lang='pug'>
 include ~bem-pug-mixins/mixins
 +b.Example
  h1 Example component!

</template>

<script>
/*
import Component from './Component'
import RoutePage from '../mixins/RoutePage'
*/
export default {
  name: 'example',
  mixins: [
    /* routePage */
  ],
  props: [],
  components: {
    /* Component */
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='stylus' scoped>

</style>
