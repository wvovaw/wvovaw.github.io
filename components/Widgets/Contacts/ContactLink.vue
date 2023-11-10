<script setup lang="ts">
import { type HEXColorLink } from "@/types";

interface IconLinkProps {
  link: HEXColorLink; 
}
defineProps<IconLinkProps>();
</script>

<template>
  <a
    type="link"
    :href="link.url"
    :target="link.target"
    class="flex flex-col justify-center text-center"
  >
    <Icon
      v-if="link.icon"
      :name="link.icon"
      class="m-2 mb-5 flex h-12 w-12 justify-center saturate-0 backdrop-filter transition duration-150 ease-in hover:saturate-100 sm:mb-0 sm:h-20 sm:w-20"
    />
    <label v-if="link.title" class="my-3 font-roboto font-bold">
      {{ link.title }}
    </label>
  </a>
</template>

<style scoped>
.icon {
  color: v-bind("link.color");
}
</style>
