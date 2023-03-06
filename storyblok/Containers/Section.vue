<script setup>
const props = defineProps({ blok: Object });
const data = toRaw(unref(await useState("siteConfig")));
const color = ref(null);
color.value = data.story.content[props.blok.color].color;
</script>

<template>
  <div
    v-editable="blok"
    class="grid w-full place-items-center"
    :class="[blok.height]"
    :style="{ 'background-color': color }"
  >
    <StoryblokComponent
      v-for="blok in blok.content"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
