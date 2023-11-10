<script setup lang="ts">
import type { UIColors } from "@/types";

interface HeaderProps {
  color?: UIColors;
  variant?: "h1" | "h2" | "h3" | "h4";
  align?: "start" | "center" | "end";
  anchor?: string;
}
const props = withDefaults(defineProps<HeaderProps>(), {
  color: undefined,
  align: "center",
  variant: "h3",
  anchor: undefined,
});

const variantClass = computed(() => {
  switch (props.variant) {
    case "h1":
      return "text-4xl font-extrabold lg:text-5xl";
    case "h2":
      return "text-3xl lg:text-4xl font-semibold first:mt-0";
    case "h3":
      return "text-2xl font-semibold";
    case "h4":
      return "text-xl font-semibold";
    default:
      return "text-4xl font-extrabold lg:text-5xl";
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
    case "ghost":
      return "text-ghost";
    default:
      return "text-base";
  }
});

const alignClass = computed(() => {
  switch (props.align) {
    case "start":
      return "text-start";
    case "center":
      return "text-center";
    case "end":
      return "text-end";
    default:
      return "text-center";
  }
});

const classList = computed(() => [
  variantClass.value,
  alignClass.value,
  colorClass.value,
]);
</script>

<template>
  <component
    :is="variant"
    :id="anchor"
    class="scroll-m-20 tracking-tight"
    :class="classList"
  >
    <slot />
  </component>
</template>
