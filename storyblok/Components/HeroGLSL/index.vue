<script setup lang="ts">
defineProps<{ blok: any }>();
</script>

<template>
  <div
    v-editable="blok"
    class="grid h-screen w-full"
    :class="[blok.height, blok.content_position]"
  >
    <HeroCanvas :fragment-url="blok.shader.filename" />
    <HeroBody :headline="blok.headline" :subheadline="blok.subheadline" :bloks="blok.buttons"/>
  </div>
</template>
