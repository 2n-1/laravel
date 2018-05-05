export default {
  methods: {
    routeChange(routeName) {
      this.$router.push({name: routeName});
    },
  },
};
