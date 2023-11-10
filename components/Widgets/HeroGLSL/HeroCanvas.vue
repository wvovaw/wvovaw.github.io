<script setup lang="ts">
defineProps<{
  fragmentUrl: string;
}>();

useHead({
  script: [
    {
      src: "./scripts/glsl-canvas.min.js",
    },
  ],
});

const options = {
  alpha: true,
  antialias: true,
  depth: true,
  desynchronized: false,
  failIfMajorPerformanceCaveat: false,
  powerPreference: "default",
  premultipliedAlpha: false,
  preserveDrawingBuffer: false,
  stencil: false,
  doubleSided: false,
  extensions: ["EXT_shader_texture_lod"],
  onError: (error: Error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  },
};

const canvas = ref(null);
</script>

<template>
  <canvas
    ref="canvas"
    class="glsl-canvas absolute -z-30 h-full w-full"
    :data-fragment-url="fragmentUrl"
    :options="options"
  />
</template>
