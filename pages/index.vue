<template>
  <div>
    <div ref="aboveTheFold" class="top-color" style="overflow-y: hidden">
      <v-container>
        <v-row
          v-if="$vuetify.breakpoint.mdAndUp"
          :style="
            isShowingChats
              ? 'height: fit-content'
              : 'height: 70vh; min-height:504px;'
          "
          class="center-content"
          no-gutters
        >
          <v-col
            :md="isShowingChats ? 9 : 6"
            class="px-0 px-md-16 pb-8"
            cols="12"
          >
            <v-row
              :style="isShowingChats ? 'height: fit-content' : 'height: 25vh;'"
              class="center-content filehandler"
            >
              <FileHandler
                :style="isShowingChats ? 'max-width: 800px' : ''"
                class=""
                style="align-self: end; width: 100%"
                @hide_explanation="isShowingChats = $event"
                @new_messages="newMessages"
              />
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container v-if="isShowingChats">
      <ChartsResults ref="results" :attachments="attachments" :chat="chat" />
    </v-container>
  </div>
</template>

<script>
import { Chat } from "~/functions/transformChatData";
import {
  GTAG_INTERACTION,
  GTAG_LEAD,
  GTAG_NUM_PERSONS,
  gtagEvent,
} from "~/functions/gtagValues";
import debounce from "lodash/debounce";

export default {
  async asyncData({ $content }) {
    const page = await $content("home").fetch();
    return {
      page,
    };
  },
  data() {
    return {
      isShowingChats: false,
      chat: undefined,
      attachments: undefined,
      loading: false,
    };
  },
  head() {
    return {
      title: "WhatsAnalyze - The WhatsApp Chat Analyzer",
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: "WhatsAnalyze - The WhatsApp Chat Analyzer",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          property: "og:site_name",
          content: "WhatsAnalyze - The WhatsApp Chat Analyzer",
        },
        {
          hid: "description",
          name: "description",
          property: "description",
          content:
            "America's Most Popular WhatsApp Analyzer ✓ Now offering Group chats ✓ Reveal your friends character ✓ No Chat Data is sent to a Server. Get Started now!",
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content:
            "America's Most Popular WhatsApp Analyzer ✓ Now offering Group chats ✓ Reveal your friends character ✓ No Chat Data is sent to a Server. Get Started now!",
        },
        {
          hid: "og:url",
          name: "og:url",
          property: "og:url",
          content: "whatsanalyze.com",
        },
      ],
    };
  },
  created() {
    // eslint-disable-next-line no-undef
    if (process.client) {
      Object.keys(this.$route.query).forEach((key) => {
        gtagEvent(key, GTAG_LEAD);
      });
    }
  },
  mounted() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 0);
    window.addEventListener("scroll", this.handleDebouncedScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleDebouncedScroll);
  },
  methods: {
    Chat,
    newMessages(chatObject) {
      // we only update with default chat object if chat_ is undefined
      if (!chatObject.default || this.chat === undefined) {
        this.attachments = chatObject.attachments;
        this.chat = new Chat(chatObject.messages);
        if (this.chat.numPersonsInChat <= 2) {
          gtagEvent("analyzed_pair_chat", GTAG_INTERACTION, 0);
        } else {
          gtagEvent("analyzed_group_chat", GTAG_INTERACTION, 0);
        }
        gtagEvent(
          "analyzed_chat_" + this.chat.numPersonsInChat,
          GTAG_NUM_PERSONS,
          0
        );
      }
    },
    rando() {
      throw Error("random errro");
    },
    handleScroll() {
      // Any code to be executed when the window is scrolled
      this.$refs.aboveTheFold.scrollTop = window.scrollY;
    },
  },
};
</script>

<style lang="scss">
.v-btn {
  text-transform: none !important;
}

@media (min-width: 760px) {
  .testimonial {
    min-width: 300px;
    width: 50%;
    float: left;
    padding: 3em;
  }
}

@media (min-width: 760px) {
  .testimonial {
    min-width: 300px;
    width: 50%;
    float: left;
    padding: 3em;
  }
  .explainer {
    min-width: 150px;
    max-width: 25%;
    float: left;
    padding: 1em;
  }
  .explainer-list p {
    margin-right: 10%;
    display: inline;
  }
}

.explainer-list {
  overflow: hidden;
  margin-left: 10%;
  margin-bottom: 40px;
  margin-top: 20px;
}

.explainer-list p {
  font-size: 1.2em;
}

.explainer h2 {
  min-height: 3em;
}

.explainer img {
  max-height: 200px;
  padding: 1em;
}

@media (min-width: 761px) {
  .explainer {
    min-width: 150px;
    max-width: 25%;
    float: left;
    padding: 3em;
  }
  .explainer-list p {
    display: inline;
    padding: 1em;
    width: 33%;
  }
  .testimonial {
    width: 100%;
    padding: 3em;
  }
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.center-content {
  justify-content: center;
}
</style>
