<script setup>
const story = await useAsyncStoryblok("home", { version: "draft" });
</script>

<template>
  <main role="main">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>
