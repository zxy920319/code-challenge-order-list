<template>
  <v-app class="order-list-container">
    <v-app-bar app color="primary" light>
      <div class="d-flex align-center">
        <v-img
          alt="Takeaway Logo"
          contain
          :src="require('@/assets/takeaway.svg')"
          transition="scale-transition"
          width="164"
        />
      </div>

      <v-spacer></v-spacer>

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn small fab v-on="on">
            <v-avatar color="secondary" size="36">
              <span class="white--text">{{ selectedLang }}</span>
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in langs"
            :key="i"
            @click="setDefaultLang(item.title)"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <user-profile />
    </v-content>

    <v-btn fixed bottom right fab dark large color="secondary">
      <v-badge color="error" content="!">
        <v-icon dark>mdi-truck-delivery</v-icon>
      </v-badge>
    </v-btn>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserProfile from "@/views/UserProfile";
export default {
  name: "App",

  components: {
    UserProfile
  },

  data: () => ({
    langs: [
      { title: "EN", name: "English" },
      { title: "ZH", name: "中文" },
      { title: "JA", name: "日本語" }
    ],
    selectedLang: "EN"
    //
  }),

  computed: mapGetters(["activeOrder"]),

  mounted() {
    // eslint-disable-next-line no-console
    console.warn(this);
    this.getLast5Orders();
  },

  methods: {
    ...mapActions(["getLast5Orders"]),
    setDefaultLang(title) {
      switch (title) {
        case "EN":
          this.$vuetify.lang.current = "en";
          break;

        case "ZH":
          this.$vuetify.lang.current = "zhHans";
          break;

        case "JA":
          this.$vuetify.lang.current = "ja";
          break;

        default:
          this.$vuetify.lang.current = "en";
          break;
      }
      this.selectedLang = title;
    }
  }
};
</script>
