<template style='pug'>
 include ~bem-pug-mixins/mixins

</template>

<script>
export default {
  name: 'example',
  props: [],
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log(`Component ${this.$options.name} mounted.`);
  },
  methods: {},
};
</script>

<style lang='stylus' scoped>

</style>
