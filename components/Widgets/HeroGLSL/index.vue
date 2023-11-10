<script setup lang="ts">
import HeroCanvas from "./HeroCanvas.vue";
import HeroBody from "./HeroBody.vue";

defineProps<{
  headline: string;
  subheadline: string;
  fragmentUrl: string;
}>();
</script>

<template>
  <div class="grid h-screen w-full place-content-center">
    <HeroCanvas :fragment-url="fragmentUrl" />
    <HeroBody :headline="headline" :subheadline="subheadline">
      <slot />
    </HeroBody>
  </div>
</template>
