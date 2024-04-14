<script setup lang="ts">
import type { Tech } from "@/types";

interface TechCardProps {
  tech: Tech;
}
const props = defineProps<TechCardProps>();

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
  <div class="flex justify-center">
    <div
      class="block h-fit rounded-lg p-2 text-center text-neutral-content shadow-lg backdrop-invert lg:h-32 lg:w-32"
      :class="colorClass"
    >
      <div class="m-0 lg:m-3">
        <h5 class="text-xs font-normal leading-tight lg:text-xl">
          {{ tech.title }}
        </h5>
        <Icon
          :name="tech.icon"
          class="m-2 mb-0 flex h-10 w-10 justify-center lg:h-16 lg:w-16"
        />
      </div>
    </div>
  </div>
</template>
