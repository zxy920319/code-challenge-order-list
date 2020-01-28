module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      axios: "^0.19.2",
      vuetify: "^2.1.0",
      vuex: "^3.1.2"
    }
  });

  api.render("./template", {
    ...options
  });

  api.onCreateComplete(() => {
    api.exitLog("OrderList.vue has been imported");
  });
};
