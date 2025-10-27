<script setup lang="ts">
import HeroBody from "./HeroBody.vue";
import HeroGLSLCanvas from "./HeroGLSLCanvas.vue";

defineProps<{
  headline: string;
  subheadline: string;
  fragmentUrl: string;
}>();
</script>

<template>
  <div class="grid h-screen w-full place-content-center">
    <HeroGLSLCanvas :fragment-url="fragmentUrl" />
    <HeroBody :headline="headline" :subheadline="subheadline">
      <slot />
    </HeroBody>
  </div>
</template>
