<template>
  <div class="profile-container">
    <v-parallax
      :src="require('@/assets/img/luke-michael-1cWZgnBhZRs-unsplash.jpg')"
      height="400"
    ></v-parallax>

    <v-container class="profile-wrap">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-sheet v-if="profile" elevation="24" class="mx-auto" width="90vw">
            <v-row justify="center" align="center">
              <v-col cols="12" md="4">
                <div class="picture">
                  <v-btn fab color="primary" elevation="4">
                    <v-avatar size="150">
                      <img :src="profile.picture.large" :alt="name" />
                    </v-avatar>
                  </v-btn>
                </div>
                <v-col
                  cols="12"
                  md="12"
                  class="d-flex justify-center align-center  headline accent--text text--darken-4"
                >
                  {{ name }}
                  <v-icon v-if="profile.gender === 'Female'" color="pink"
                    >mdi-gender-female</v-icon
                  >
                  <v-icon v-else color="blue">mdi-gender-male</v-icon>
                </v-col>
                <div
                  class="d-flex justify-center align-center mt-6 headline accent--text text--darken-4"
                >
                  <v-icon small color="primary" class="mr-4">mdi-email</v-icon>
                  <div class="body-1 mt-1">{{ profile.emailAddress }}</div>
                </div>
                <div
                  class="d-flex justify-center align-center mt-4 headline accent--text text--darken-4"
                >
                  <v-icon small color="primary" class="mr-4">mdi-cake</v-icon>
                  <div class="body-1 mt-1">{{ dob }}</div>
                </div>
                <div
                  class="d-flex justify-center align-center mt-4 headline accent--text text--darken-4"
                >
                  <v-icon small color="primary" class="mr-4">mdi-home</v-icon>
                  <div class="body-1 mt-1">{{ profile.address }}</div>
                </div>
              </v-col>
            </v-row>

            <router-view />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { GetUserInfo } from "@/services";
import { mapState, mapMutations } from "vuex";
import * as moment from "moment";
export default {
  name: "UserProfile",

  computed: {
    ...mapState(["profile"]),
    name() {
      return `${this.profile.firstName} ${this.profile.lastName}`;
    },
    dob() {
      return moment(this.profile.birthday).format("D MMM YYYY");
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
