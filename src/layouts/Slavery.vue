<template>
<div id="slavery">
  <Camo id="camo"/>
  <div id="content">
    <h3>I've been drafted into the russian army ☮</h3>
    <p>will be home in</p>
    <Countdown :date="deadline" @onFinish="finish()"></Countdown>
    <div id="video">
      <youtube :player-vars="playerVars" ref="youtube" @playing="playing" />
    </div>
  </div>
</div>
</template>

<script>
import VueYoutube from "vue-youtube";
import Countdown from "../components/Countdown";
import Camo from "../components/Camo";

export default {
  components: {
    Camo,
    Countdown,
    VueYoutube,
    },
  data() {
    return {
      deadline: new Date("2022-06-19T00:00:00"),
      shortname: "https-wvovaw-github-io",
      playerVars: {
        playlist:
          "879ysA4h9r4",
        autoplay: 1,
        origin: "https://wvovaw.github.io",
      },
    };
  },
  computed: {
    player() {
      this.$youtube.setVo;
      return this.$refs.youtube.player;
    },
    songs() {
      this.$youtube.PlaylistItems();
    },
  },
  mounted: async function () {},
  methods: {
    playing() {
      this.player.setVolume(10);
      this.player.playVideo();
    },
    finish() {
      console.log("aboba");
    },
  },
};
</script>

<style>
#slavery {
  text-align: center;
  position: relative;
  padding: 1% 15% 1% 15%;
  color: var(--foreground-alt);
  overflow: hidden;
}
#content {
  position: relative;
}
#video {
  display: flex;
  justify-content: center;
  padding: 1% 15% 1% 15%;
}
@media (max-width: 511px) {
  #video {
    display: none;
  }
}
</style>