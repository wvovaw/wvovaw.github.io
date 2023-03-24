<script setup>
const props = defineProps({ blok: Object });
</script>

<template>
  <div
    v-editable="blok"
    class="h-fit w-full grid place-content-center"
  >
    <StoryblokComponent
      v-for="blok in blok.content"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
