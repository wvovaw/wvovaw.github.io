<script setup>
const props = defineProps({ blok: Object });
</script>

<template>
  <div
    v-editable="blok"
    class="relative mb-20 mt-10 w-full text-center"
    :class="blok.align"
  >
    <h1
      class="absolute inset-0 text-7xl font-semibold leading-tight tracking-widest text-gray-100 opacity-30"
    >
      {{ blok.text2 }}
    </h1>
    <h1
      class="absolute inset-7 z-10 text-5xl font-extrabold italic leading-tight tracking-tighter text-green-500"
    >
      {{ blok.text1 }}
    </h1>
  </div>
</template>
