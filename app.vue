<script setup lang="ts">
import { StoryblokStory } from './types';
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/config", {
  version: "published",
  resolve_links: "url",
});
useState<StoryblokStory>("siteConfig", () => data.story);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
