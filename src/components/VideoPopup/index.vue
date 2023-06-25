<template>
  <div
    class="popup-remove-loan-wrapper popup-wrapper"
    :class="{ active: showPopup }"
  >
    <div class="popup-remove-loan filter-popup" v-if="video && showPopup">
      <div class="header">
        <video-player :src="video" controls :loop="true" :volume="0.6" autoplay>
          <!-- <template v-slot="{ player, state }"> -->
          <!-- <div class="custom-player-controls">
              <button @click="state.playing ? player.pause() : player.play()">
                {{ state.playing ? "Pause" : "Play" }}
              </button>
              <button @click="player.muted(!state.muted)">
                {{ state.muted ? "UnMute" : "Mute" }}
              </button>
               more custom controls elements ... 
            </div> -->
          <!-- </template> -->
        </video-player>

        <a
          href="#"
          class="button-close-popup"
          @click.prevent="this.$emit('close-popup')"
        >
          <div class="icon">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.03027 8L16.0303 16"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0303 8L8.03027 16"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>
      <slot name="popupbody"></slot>
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<script>
//   import { defineComponent } from 'vue'
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";

export default {
  name: "videoPopup",
  components: {
    // VuePlayerVideo,
    VideoPlayer,
  },
  props: {
    showPopup: {
      type: Boolean,
      requierd: true,
      default: false,
    },
    video: {
      type: String,
      requierd: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/filter-popup/filter-popup.scss";
@import "./style.scss";
</style>
<style>
.video-js .vjs-control-bar {
  width: 96% !important;
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  margin: 20px auto;
  height: 70px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.video-js .vjs-volume-panel,
.video-js .vjs-control {
  height: 30px;
}
.page-wrapper .section.section-01 .primary-part .actions .play-video {
  border: none;
}

.video-js .vjs-tech {
  object-fit: cover;
  border-radius: 24px;
}

.video-js .vjs-big-play-button {
  display: none;
}

.vjs-picture-in-picture-control {
  display: none !important;
}
</style>
