<template>
  <div
    v-editable="blok"
    class="container mx-auto my-12 grid gap-12 md:grid-cols-2"
    :class="blok.items_align"
  >
    <StoryblokComponent
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
