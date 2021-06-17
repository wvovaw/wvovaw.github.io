<template>
  <div id="container">
    <div id="slavery">
      <h3>I've been drafted into the russian army ☮</h3>
      <p>
        will be home in
          <flip-countdown deadline="2022-06-22 00:00:00"></flip-countdown>
      </p>
    </div>
    <div id="video">
      <youtube
        :player-vars="playerVars"
        ref="youtube"
        @playing="playing"
      />
    </div>
  </div>
</template>

<script>
import VueYoutube from "vue-youtube";
// import FlipCountdown from "vue2-flip-countdown";
if (process.isClient) {
  const FlipCountdown = require("vue2-flip-countdown");
  Vue.use(FlipCountdown);
  this.components.FlipCountdown = FlipCountdown;
}

export default {
  components: { VueYoutube },
  data() {
    return {
      playerVars: {
        playlist: 'WM8bTdBs-cw,q7DfQMPmJRI,5ClCaPmAA7s,1xp6DOifzYo,hxsld16TjSU,JIm5ysUXVok,PcSoLwFisaw,rj3IbZV_YQM,POdNTtDi-eA,9D2R69gVyZ0,brGNqP1EBLE,N26N7lQHNW8,ed_UWFr13pU,BNTo34xOwoM,qJq9y9xPKWs,civuoU_NE38,M8r5rnamdaI,vvCM7Qig9qI,qnlhVVwBfew,LMCU-lYb0G4,bndL7wwAj0U,flRx55ucBlQ,3BXyEUOuNds,75hGl9stdQI,rDrhI1GUnNg,cDuLYGYHhQk,MM62wjLrgmA,-_nQhGR0K8M,q0BOpkA2Vs4,Y7JG63IuaWs,dUQjGpm5Kr8,4MzVuHqsNoM,JAzLQ5aeAOw,7RmLkY1387A,NfpwKs1REg0,1Iz5DaX8f7w,yat1iwCkgD8,wbAanI0Q68w,gBnalcSi138,O98mpBWsab8,QOR0RilgO2w,StwAtxgDUDc,Oko1aqm3K1o,ImQmta2XYqo,9cwrLM3pDeY,baiQKqfqOT0,tqjOrkMHUkk,-T2cniIZ3sM,O5Ohwdps7u4,Ebr85ORhciU,CeTKHfMNO58,DhMv5WVOli4,7w4AE4Mat8o,Cw8V1TQXcGc,2vFY8ufrslw,QixM_mwdVoQ,dzEahGFoEsw,FgNuLP3xpjo,b2BKKeiYH24,EMESjt71SYs,xH9Y3qEHAuw,hCYOV60WWW4,qEmfBRF0Mg0,matrK_WTAkQ,kpdHuo7YwBU,E3wIAf6ai_0,6JLF0GAdJAo',
        autoplay: 1,
        origin: "https://wvovaw.github.io",
        // origin: "http://localhost:8080",
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
  mounted: async function () {
  },
  methods: {
    playing() {
      this.player.setVolume(10);
      this.player.playVideo();
    },
  },
};
</script>

<style>
#slavery {
  padding: 1% 15% 1% 15%;
  background-color: var(--background);
  color: var(--foreground);
}
#video {
  background-color: var(--background);
  display: flex;
  justify-content: center;
  padding: 1% 15% 1% 15%;
}
</style>