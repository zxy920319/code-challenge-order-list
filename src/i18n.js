import Vue from "vue";
import VueI18n from "vue-i18n";
import zhHans from "vuetify/es5/locale/zh-Hans";
import ja from "vuetify/es5/locale/ja";
import en from "vuetify/es5/locale/en";

Vue.use(VueI18n);

const i18n = { zhHans, ja, en };

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );

  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = { $vuetify: { ...i18n[locale], ...locales(key) } };
    }
  });

  return messages;
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages()
});
