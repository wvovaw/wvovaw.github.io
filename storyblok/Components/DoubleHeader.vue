<script setup>
const props = defineProps({ blok: Object });
const anchor = computed(() =>
  props.blok.anchor ? props.blok.anchor.url : ""
);
const color = ref(props.blok.color);
const colorClass = reactive({
  "text-base-content": color.value === "base",
  "text-neutral": color.value === "neutral",
  "text-primary": color.value === "primary",
  "text-secondary": color.value === "secondary",
  "text-accent": color.value === "accent",
  "text-info": color.value === "info",
  "text-success": color.value === "success",
  "text-warning": color.value === "warning",
  "text-error": color.value === "error",
});
</script>

<template>
  <div
    v-editable="blok"
    class="relative mb-20 mt-10 w-full text-center"
    :class="blok.align"
    :id="anchor"
  >
    <h1
      class="absolute inset-0 text-5xl md:text-7xl font-semibold leading-tight tracking-widest text-base-content opacity-30"
    >
      {{ blok.text2 }}
    </h1>
    <h1
      class="absolute inset-7 z-10 text-3xl md:text-5xl font-extrabold italic leading-tight tracking-tighter"
      :class="colorClass"
    >
      {{ blok.text1 }}
    </h1>
  </div>
</template>
