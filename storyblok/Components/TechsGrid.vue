<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div
    v-editable="blok"
    class="flex flex-row flex-wrap justify-around mt-5 h-full md:grid md:grid-cols-3 md:justify-between gap-8 lg:grid-cols-3 xl:grid-cols-4"
  >
    <StoryblokComponent
      v-for="blok in blok.skills"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
