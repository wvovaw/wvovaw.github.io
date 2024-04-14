<script setup lang="ts">
import type { UIColors } from "@/types";

interface DoubleHeaderProps {
  text1: string;
  text2: string;
  anchor?: string;
  color?: UIColors | "base";
  align?: "start" | "center" | "end";
}
const props = defineProps<DoubleHeaderProps>();

const alignClass = computed(() => {
  switch (props.align) {
    case "start":
      return "text-start";
    case "center":
      return "text-center";
    case "end":
      return "text-end";
    default:
      return "center";
  }
});
const colorClass = computed(() => {
  switch (props.color) {
    case "neutral":
      return "text-neutral";
    case "primary":
      return "text-primary";
    case "secondary":
      return "text-secondary";
    case "accent":
      return "text-accent";
    case "info":
      return "text-info";
    case "success":
      return "text-success";
    case "warning":
      return "text-warning";
    case "error":
      return "text-error";
    case "base":
    default:
      return "text-base-content";
  }
});
</script>

<template>
  <div
    :id="anchor"
    class="relative mb-20 mt-10 w-full text-center uppercase"
    :class="alignClass"
  >
    <h1
      class="absolute inset-0 text-5xl font-semibold leading-tight tracking-widest text-base-content opacity-30 md:text-7xl"
    >
      {{ text2 }}
    </h1>
    <h1
      class="absolute inset-7 z-10 text-3xl font-extrabold italic leading-tight tracking-tighter md:text-5xl"
      :class="colorClass"
    >
      {{ text1 }}
    </h1>
  </div>
</template>
