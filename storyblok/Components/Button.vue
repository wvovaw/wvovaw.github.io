<script setup>
defineProps({ blok: Object });
</script>

<template>
  <NuxtLink
    v-editable="blok"
    type="button"
    class="inline-block rounded-full px-6 text-xs font-medium uppercase leading-tight shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-0"
    :class="{
      'border-2 border-blue-600 py-2 text-blue-600 hover:bg-black hover:bg-opacity-5':
        blok.style == 'outline',
      'bg-blue-600 py-2.5 text-white hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg':
        blok.style == 'solid',
    }"
    :to="blok.link.url"
  >
    {{ blok.label }}
  </NuxtLink>
</template>
