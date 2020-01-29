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

    <v-btn
      v-if="activeOrder.length > 0"
      fixed
      bottom
      right
      fab
      dark
      large
      color="secondary"
      @click="sheet = true"
    >
      <v-badge color="error" content="!">
        <v-icon dark>mdi-truck-delivery</v-icon>
      </v-badge>
    </v-btn>

    <v-bottom-sheet v-model="sheet" inset>
      <v-sheet class="prominent-bar" height="160" tile>
        <v-card
          v-for="(item, index) in activeOrder"
          :key="index"
          outlined
          dark
          tile
          elevation="8"
          color="tertiary"
          width="300"
          height="140"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ item.status }}</div>
              <v-list-item-title class="title mb-1">
                {{ item.restaurantName }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ item.orderTime }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80">
              <img :src="require('@/assets/img/food.png')" alt="restaurant" />
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-sheet>
    </v-bottom-sheet>
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
    selectedLang: "EN",
    sheet: false
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
