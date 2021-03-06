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
          @click="$router.push('/')"
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
            @click="setDefaultLang(item)"
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
          @click="() => handleClick(item)"
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
      { title: "EN", name: "English", target: "en" },
      { title: "ZH", name: "中文", target: "zhHans" },
      { title: "JA", name: "日本語", target: "ja" }
    ],
    selectedLang: "EN",
    sheet: false
    //
  }),

  computed: mapGetters(["activeOrder"]),

  mounted() {
    this.getLast5Orders();
  },

  methods: {
    ...mapActions(["getLast5Orders"]),
    setDefaultLang(lang) {
      this.$i18n.locale = lang.target;
      this.selectedLang = lang.title;
    },

    handleClick(order) {
      const location = {
        name: "OrderDetail"
      };
      location.params = { order };
      this.$router.push(location);

      this.$nextTick(() => {
        this.sheet = false;
      });
    }
  }
};
</script>
