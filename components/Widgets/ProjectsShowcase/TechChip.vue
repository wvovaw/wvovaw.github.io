<script setup lang="ts">
import { type Tech } from "@/types";

interface TechChipProps {
  tech: Tech;
}
const props = defineProps<TechChipProps>();

const colorClass = computed(() => {
  switch (props.tech.color) {
    case "neutral":
      return "bg-neutral text-neutral-content";
    case "primary":
      return "bg-primary text-primary-content";
    case "secondary":
      return "bg-secondary text-secondary-content";
    case "accent":
      return "bg-accent text-accent-content";
    case "info":
      return "bg-info text-info-content";
    case "success":
      return "bg-success text-success-content";
    case "warning":
      return "bg-warning text-warning-content";
    case "error":
      return "bg-error text-error-content";
    case "base1":
      return "bg-base-100 text-base-content";
    case "base2":
      return "bg-base-200 text-base-content";
    case "base3":
      return "bg-base-300 text-base-content";
    default:
      return "bg-base-100 text-base-content";
  }
});
</script>

<template>
  <div class="badge gap-2" :class="colorClass">
    <Icon :name="tech.icon" class="inline-block h-4 w-4" />
    <label class="my-3 font-roboto font-bold">
      {{ tech.title }}
    </label>
  </div>
</template>
