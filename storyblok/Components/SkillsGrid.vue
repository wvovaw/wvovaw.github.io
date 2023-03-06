<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div
    v-editable="blok"
    class="mt-5 grid h-full grid-cols-2 justify-between gap-8 lg:grid-cols-3 xl:grid-cols-4"
  >
    <StoryblokComponent
      v-for="blok in blok.skills"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
