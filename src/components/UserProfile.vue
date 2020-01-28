<template>
  <div class="profile-container">
    <v-parallax
      :src="require('@/assets/img/luke-michael-1cWZgnBhZRs-unsplash.jpg')"
      height="400"
    ></v-parallax>

    <v-container class="profile-wrap">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-sheet
            v-if="profile"
            elevation="24"
            class="mx-auto"
            height="100vh"
            width="80vw"
          >
            <div class="picture">
              <v-btn fab color="primary" elevation="4">
                <v-avatar size="150">
                  <img
                    :src="profile.picture.large"
                    :alt="`${profile.firstName} ${profile.lastName}`"
                  />
                </v-avatar>
              </v-btn>
            </div>
            <v-row justify="center" class="mt-4">
              <div class="headline accent--text text--darken-4">
                {{ name }}
              </div>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { GetUserInfo } from "@/services";
import { mapState, mapMutations } from "vuex";

export default {
  name: "UserProfile",

  data: () => ({
    //
  }),

  computed: {
    ...mapState(["profile"]),
    name() {
      return `${this.profile.firstName} ${this.profile.lastName}`;
    }
  },

  mounted() {
    if (!this.profile) this.fetchUser();
  },

  methods: {
    ...mapMutations(["setProfile"]),
    async fetchUser() {
      const res = await GetUserInfo();
      // eslint-disable-next-line no-console
      console.log(res);

      if (res) this.setProfile(res);
    }
  }
};
</script>
