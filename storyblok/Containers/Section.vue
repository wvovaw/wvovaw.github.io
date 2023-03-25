<script setup>
const props = defineProps({ blok: Object });
const data = toRaw(unref(await useState("siteConfig")));
const color = ref(data.story.content[props.blok.color].color);
</script>

<template>
  <div
    v-editable="blok"
    class="grid w-full place-items-center px-4 pt-16"
    :class="[blok.height]"
    :style="`background-color: ${color}`"
  >
    <StoryblokComponent
      v-for="blok in blok.content"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
