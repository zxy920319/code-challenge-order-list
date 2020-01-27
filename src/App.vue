<template>
  <v-app>
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

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { GetUserInfo } from "@/services";
export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  }),

  mounted() {
    // eslint-disable-next-line no-console
    console.warn(this);
    GetUserInfo();
  }
};
</script>
