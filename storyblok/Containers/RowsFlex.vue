<template>
  <div v-editable="blok" class="container mx-auto my-12 flex flex-row">
    <StoryblokComponent
      v-for="blok in blok.rows"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
