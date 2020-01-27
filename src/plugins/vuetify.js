import Vue from "vue";
import Vuetify from "vuetify/lib";
import theme from "@/theme";
import i18n from "@/i18n";
Vue.use(Vuetify);

export default new Vuetify({
  theme,
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
});
