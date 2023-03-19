<script setup>
const props = defineProps({ blok: Object });
</script>

<template>
  <div v-editable="blok" class="w-full" :id="blok.anchor.url">
    <h1
      class="leading-tight text-gray-100"
      :class="[blok.size, blok.align, blok.weight, blok.color]"
    >
      {{ blok.text }}
    </h1>
  </div>
</template>
