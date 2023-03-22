<script setup>
defineProps({ blok: Object });
</script>
<template>
  <div
    v-editable="blok"
    class="container max-w-[1200px] mx-auto my-12 flex flex-col justify-between gap-12"
  >
    <StoryblokComponent
      v-for="blok in blok.projects"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
