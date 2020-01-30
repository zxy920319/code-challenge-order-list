import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["profile"]),
    currency() {
      const options = {
        dollar: "$",
        yen: "¥",
        euro: "€"
      };
      if (this.profile) return options[this.profile.currency];
      else return options["euro"];
    }
  }
};
