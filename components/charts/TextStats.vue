<template>
  <v-container class="px-6">
    <!-- Days you are chatting -->
    <v-row class="white--text">
      <v-col class="cyan darken-2 fact-box py-10" cols="12" sm="6">
        <v-icon v-show="$vuetify.breakpoint.mdAndUp" size="100"
          >mdi-calendar</v-icon
        >
        <v-row>
          <v-col
            cols="12"
            class="text-h5 font-weight-bold pa-0 ma-0 text-center"
          >
            {{ $t("youChatted") }}
          </v-col>
        </v-row>

        <v-row>
          <v-col class="text-h1 font-weight-bold text-center pa-0">
            {{ dateDiffs }}
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="text-h5 font-weight-bold pa-0 text-center">
            {{ $t("days") }}
          </v-col>
        </v-row>
      </v-col>

      <v-col class="amber darken-1 fact-box py-10" cols="12" sm="6">
        <v-icon
          v-show="$vuetify.breakpoint.mdAndUp"
          color="yellow accent-1"
          size="100"
          >mdi-android-messages</v-icon
        >
        <v-row>
          <v-col
            cols="12"
            class="text-h5 font-weight-bold pa-0 ma-0 text-center"
          >
            {{ $t("youSent") }}
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-h1 font-weight-bold text-center pa-0">
            {{ totalMessages }}
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-h5 font-weight-bold pa-0 text-center">
            {{ $t("messages") }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Total message count -->

    <!-- Most active day -->

    <!-- Total Word count -->

    <!-- Totlal Images/Audio etc shared -->
  </v-container>
</template>

<script>
import {
  dateDiffs,
  firstDate,
  getDateString,
  lastDate,
} from "~/functions/utils";

export default {
  props: ["chat"],
  data() {
    return {};
  },
  computed: {
    lastDateString() {
      return getDateString(this.lastDate, false);
    },
    firstDateString() {
      return getDateString(this.firstDate, false);
    },
    dateDiffs() {
      return dateDiffs(this.firstDate, this.lastDate);
    },
    firstDate() {
      return firstDate(this.chat);
    },
    lastDate() {
      return lastDate(this.chat);
    },
    totalMessages() {
      return this.chat.chatObject.length;
    },
  },
  methods: {},
};
</script>

<style scoped>
.v-icon {
  opacity: 0.8;
  position: absolute !important;
  left: 10px;
}
.fact-box {
  position: relative;
}
</style>
