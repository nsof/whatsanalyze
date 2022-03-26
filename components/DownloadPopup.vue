<template>
  <div class="my-5">
    <v-btn
      :loading="loading"
      class="btn-color"
      dark
      @click="download"
      v-on="on"
    >
      <v-icon class="mr-2">mdi-download</v-icon>
      Download Results
    </v-btn>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import { downloadBase64File } from "~/functions/utils";
import {
  GTAG_INTERACTION,
  GTAG_PAYMENT,
  GTAG_RESULTS,
  gtagEvent,
} from "~/functions/gtagValues";

export default {
  name: "DownloadPopup",
  props: {
    chat: { type: Object },
    isSimple: { default: false, type: Boolean },
  },
  data() {
    return {
      dialog: false,
      loading: false,
      suffix: this.isSimple ? "-top" : "",
      GTAG_INTERACTION,
    };
  },
  methods: {
    download: function () {
      this.loading = true;
      gtagEvent("download_image", GTAG_RESULTS);

      setTimeout(() => {
        let additionalHeight = 0;
        document
          .querySelectorAll(".additional-height")
          .forEach((a) => (additionalHeight += a.clientHeight));

        let negativeHeight = 0;
        document
          .querySelectorAll("[remove-height-in-html2-canvas]")
          .forEach((a) => (negativeHeight -= a.clientHeight));

        let normalHeight = document.querySelector("#download-graphs")
          .clientHeight;

        //wordcloud
        let canvas = html2canvas(document.querySelector("#download-graphs"), {
          scrollX: 0,
          scrollY: -window.scrollY,
          height: normalHeight + additionalHeight + negativeHeight,
          onclone: function (clonedDoc) {
            let nonVisibleStuff = clonedDoc.querySelectorAll(
              ".only-visible-to-html2canvas"
            );
            nonVisibleStuff.forEach((y) => (y.style.display = "block"));
            return clonedDoc;
          },
        });

        let names = this.chat.messagesPerPerson
          .slice(0, 2)
          .map((person) => person.name)
          .join("-");
        canvas.then((canvas) => {
          downloadBase64File(
            canvas.toDataURL(),
            "whatsanlayze-results-" + names + ".png"
          );
          this.loading = false;
        });
      }, 250);
    },
    paypalButtonPressed() {
      gtagEvent("donation_download_results", GTAG_PAYMENT, 5);
    },
    gtagEvent,
  },
};
</script>
