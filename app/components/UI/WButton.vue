<script setup lang="ts">
import type { UIColors, UISizes } from "@types";

interface ButtonProps {
  color?: UIColors;
  size?: UISizes;
  wide?: boolean;
  block?: boolean;
  outline?: boolean;
  noBorder?: boolean;
  square?: boolean;
  circle?: boolean;
  iconStart?: string;
  iconEnd?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  color: "primary",
  size: "normal",
});

function getColorClass(color?: string) {
  if (!color)
    return "btn-primary";
  return `btn-${color}`;
}

function getSizeClass(size?: string) {
  switch (size) {
    case "tiny":
      return "btn-xs";
    case "small":
      return "btn-sm";
    case "large":
      return "btn-lg";
    default:
      return "";
  }
}

const classList = computed(() => [
  "btn",
  getColorClass(props.color),
  getSizeClass(props.size),
  {
    "btn-wide": props.wide,
    "btn-block": props.block,
    "btn-outline": props.outline,
    "btn-square": props.square,
    "btn-circle": props.circle,
    "border-none": props.noBorder,
  },
]);
</script>

<template>
  <button
    type="button"
    :class="classList"
    class="gap-2 overflow-hidden text-clip whitespace-nowrap"
  >
    <Icon v-if="iconStart" :name="iconStart" />
    <slot />
    <Icon v-if="iconEnd" :name="iconEnd" />
  </button>
</template>
