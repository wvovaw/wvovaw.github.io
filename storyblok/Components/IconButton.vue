<script setup>
const props = defineProps({ blok: Object });
</script>

<template>
  <a
    v-editable="blok"
    type="link"
    :href="blok.link.url"
    :target="blok.link.target"
    class="flex flex-col justify-center text-center"
  >
    <i class="m-2 mb-0 flex justify-center backdrop-filter saturate-0 hover:saturate-100 transition duration-150 ease-in" v-html="blok.svg" />
    <label v-if="blok.label" class="text-gray-300 font-roboto font-bold my-3">
      {{ blok.label }}
    </label>
  </a>
</template>
