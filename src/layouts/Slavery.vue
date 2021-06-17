<template>
  <div id="slavery">
    <hr />
    <h3>I've been drafted into the russian army ☮</h3>
    <p>will be home in</p>
    <Countdown :date="deadline" @onFinish="finish()"></Countdown>
    <div id="video">
      <youtube :player-vars="playerVars" ref="youtube" @playing="playing" />
    </div>
    <hr />
    <h3 id="comments">
      Leave a memes you'd like to share with me right now. IT IS NECESSARY!
    </h3 >
    <Disqus :shortname="shortname" />
    <hr />
    <h6>Ave Gestald!</h6>
  </div>
</template>

<script>
import VueYoutube from "vue-youtube";
import Countdown from "../components/Countdown";
import { Disqus } from "vue-disqus";

export default {
  components: { Countdown, VueYoutube, Disqus },
  data() {
    return {
      deadline: new Date("2022-06-22T16:37:00"),
      shortname: "https-wvovaw-github-io",
      playerVars: {
        playlist:
          "WM8bTdBs-cw,q7DfQMPmJRI,5ClCaPmAA7s,1xp6DOifzYo,hxsld16TjSU,JIm5ysUXVok,PcSoLwFisaw,rj3IbZV_YQM,POdNTtDi-eA,9D2R69gVyZ0,brGNqP1EBLE,N26N7lQHNW8,ed_UWFr13pU,BNTo34xOwoM,qJq9y9xPKWs,civuoU_NE38,M8r5rnamdaI,vvCM7Qig9qI,qnlhVVwBfew,LMCU-lYb0G4,bndL7wwAj0U,flRx55ucBlQ,3BXyEUOuNds,75hGl9stdQI,rDrhI1GUnNg,cDuLYGYHhQk,MM62wjLrgmA,-_nQhGR0K8M,q0BOpkA2Vs4,Y7JG63IuaWs,dUQjGpm5Kr8,4MzVuHqsNoM,JAzLQ5aeAOw,7RmLkY1387A,NfpwKs1REg0,1Iz5DaX8f7w,yat1iwCkgD8,wbAanI0Q68w,gBnalcSi138,O98mpBWsab8,QOR0RilgO2w,StwAtxgDUDc,Oko1aqm3K1o,ImQmta2XYqo,9cwrLM3pDeY,baiQKqfqOT0,tqjOrkMHUkk,-T2cniIZ3sM,O5Ohwdps7u4,Ebr85ORhciU,CeTKHfMNO58,DhMv5WVOli4,7w4AE4Mat8o,Cw8V1TQXcGc,2vFY8ufrslw,QixM_mwdVoQ,dzEahGFoEsw,FgNuLP3xpjo,b2BKKeiYH24,EMESjt71SYs,xH9Y3qEHAuw,hCYOV60WWW4,qEmfBRF0Mg0,matrK_WTAkQ,kpdHuo7YwBU,E3wIAf6ai_0,6JLF0GAdJAo",
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