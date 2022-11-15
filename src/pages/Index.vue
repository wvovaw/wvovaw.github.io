<template>
  <div class="index">
    <VGLSLCanvas class="canvas" :fragment="shaderProgram" />
    <Layout v-cloak />
  </div>
</template>

<script>
import VGLSLCanvas from "@/components/VGLSLCanvas.vue";
export default {
  metaInfo: {
    title: "Wvovaw's personal page",
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "Hi! My name is Vladimir and I am a teapot.",
      },
      { property: "og:url", content: "https://wvovaw.github.io" },
      { property: "og:site_name", content: "wvovaw" },
    ],
  },
  data() {
    return {
      shaderProgram: "",
    };
  },
  beforeMount() {
    const randNum = Math.random();
    if (this.$isMobile()) {
      if (randNum < 0.5) this.shaderProgram = "/shaders/slime.glsl";
      else this.shaderProgram = "/shaders/spirits.glsl";
    } else {
      if (randNum < 0.25) this.shaderProgram = "/shaders/spirits.glsl";
      else if (randNum < 0.5) this.shaderProgram = "/shaders/silk.glsl";
      else if (randNum < 0.75) this.shaderProgram = "/shaders/colors.glsl";
      else this.shaderProgram = "/shaders/slime.glsl";
    }
  },
  mounted() {
    this.$colorscheme.load();
  },
  components: {
    VGLSLCanvas,
  },
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}

.canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  isolation: isolate;
  z-index: -1;
}
</style>
