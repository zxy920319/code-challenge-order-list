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
    ...mapState(["profile"])
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

<style lang="scss">
.profile-container {
  height: calc(100vh + 400px);
  background-color: var(--v-accent-lighten2);
  .profile-wrap {
    position: absolute;
    top: 300px;
  }
  .picture {
    margin-top: -64px;
    display: inline-block;
    button {
      width: 160px;
      height: 160px;
    }
  }
}
</style>
