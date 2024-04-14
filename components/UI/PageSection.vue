<script setup lang="ts">
import type { UIColors } from "@/types";

interface PageSectionProps {
  color: UIColors | "base1" | "base2" | "base3";
}
const props = withDefaults(defineProps<PageSectionProps>(), {
  color: "base1",
});

const colors = computed(() => {
  switch (props.color) {
    case "neutral":
      return "bg-neutral";
    case "primary":
      return "bg-primary";
    case "secondary":
      return "bg-secondary";
    case "accent":
      return "bg-accent";
    case "info":
      return "bg-info";
    case "success":
      return "bg-success";
    case "warning":
      return "bg-warning";
    case "error":
      return "bg-error";
    case "ghost":
      return "bg-ghost";
    case "base1":
      return "bg-base-100";
    case "base2":
      return "bg-base-200";
    case "base3":
      return "bg-base-300";
    default:
      return "base1";
  }
});
</script>

<template>
  <div class="grid w-full place-items-center px-4 py-10" :class="colors">
    <slot />
  </div>
</template>
