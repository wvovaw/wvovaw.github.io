<script setup>
defineProps({ blok: Object });
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
  onError: (error) => {
    console.log(error);
  },
};

const canvas = ref(null);
let glsl = ref(null);
</script>

<template>
  <div
    v-editable="blok"
    class="grid w-full h-screen"
    :class="[blok.height, blok.content_position]"
  >
    <canvas
      class="glsl-canvas absolute -z-30 h-full w-full"
      :data-fragment-url="blok.shader.filename"
      :options="options"
      ref="canvas"
    />
    <div class="mx-5 max-w-5xl text-neutral-content">
      <p
        class="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl"
      >
        {{ blok.headline }}
      </p>
      <p class="text-lg font-normal md:text-3xl">{{ blok.subheadline }}</p>
      <div class="flex w-full justify-end">
        <StoryblokComponent
          v-for="blok in blok.buttons"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </div>
  </div>
</template>
