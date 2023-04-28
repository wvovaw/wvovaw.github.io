<script setup>
const props = defineProps({ blok: Object });
const color = ref(props.blok.color);
const colorClass = reactive({
  "bg-base-100 text-base-content": color.value === "base-100",
  "bg-base-200 text-base-content": color.value === "base-200",
  "bg-base-300 text-base-content": color.value === "base-300",
  "bg-neutral text-neutral-content": color.value === "neutral",
  "bg-primary text-primary-content": color.value === "primary",
  "bg-secondary text-secondary-content": color.value === "secondary",
  "bg-accent text-accent-content": color.value === "accent",
  "bg-info text-info-content": color.value === "info",
  "bg-success text-success-content": color.value === "success",
  "bg-warning text-warning-content": color.value === "warning",
  "bg-error text-error-content": color.value === "error",
});
</script>

<template>
  <div v-editable="blok" class="flex justify-center">
    <div
      class="block h-fit w-24 lg:w-36 rounded-lg p-2 text-center text-neutral-content shadow-lg backdrop-invert"
      :class="colorClass"
    >
      <div class="m-0 lg:m-3">
        <h5 class="text-base lg:text-2xl font-normal leading-tight">{{ blok.title }}</h5>
        <i class="m-2 mb-0 flex justify-center" v-html="blok.svg"> </i>
      </div>
    </div>
  </div>
</template>
