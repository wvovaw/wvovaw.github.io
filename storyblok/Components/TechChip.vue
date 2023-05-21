<script setup>
const props = defineProps({ blok: Object });
const color = ref(props.blok.color);
const colorClass = {
  "": color.value === "base-100",
  "": color.value === "base-200",
  "": color.value === "base-300",
  "badge-primary": color.value === "primary",
  "badge-secondary": color.value === "secondary",
  "badge-accent": color.value === "accent",
  "badge-info": color.value === "info",
  "badge-success": color.value === "success",
  "badge-warning": color.value === "warning",
  "badge-error": color.value === "error",
};
const classBinding = reactive([colorClass]);
</script>

<template>
  <div v-editable="blok" class="badge gap-2" :class="classBinding">
    <i class="inline-block h-4 w-4" v-html="blok.svg" />
    <label class="my-3 font-roboto font-bold">
      {{ blok.title }}
    </label>
  </div>
</template>
