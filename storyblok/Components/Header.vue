<script setup>
const props = defineProps({ blok: Object });
const anchor = computed(() =>
  props.blok.anchor ? props.blok.anchor.url : ""
);
</script>

<template>
  <div v-editable="blok" class="w-full" :id="anchor">
    <h1
      class="leading-tight text-base-content"
      :class="[blok.size, blok.align, blok.weight, blok.color]"
    >
      {{ blok.text }}
    </h1>
  </div>
</template>
