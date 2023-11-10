<script setup lang="ts">
import type { UIColors, UISizes } from "@/types";

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
  color: undefined,
  size: "normal",
  iconStart: undefined,
  iconEnd: undefined,
});

const colors = computed(() => {
  switch (props.color) {
    case "neutral":
      return "btn-neutral";
    case "primary":
      return "btn-primary";
    case "secondary":
      return "btn-secondary";
    case "accent":
      return "btn-accent";
    case "info":
      return "btn-info";
    case "success":
      return "btn-success";
    case "warning":
      return "btn-warning";
    case "error":
      return "btn-error";
    case "ghost":
      return "btn-ghost";
    default:
      return "btn-primary";
  }
});

const sizes = computed(() => {
  switch (props.size) {
    case "tiny":
      return "btn-xs";
    case "small":
      return "btn-sm";
    case "normal":
      return "";
    case "large":
      return "btn-lg";
    default:
      return "";
  }
});

const styles = computed(() => ({
  "btn-wide": props.wide,
  "btn-block": props.block,
  "btn-outline": props.outline,
  "btn-square": props.square,
  "btn-circle": props.circle,
}));

const classObject = computed(() => [sizes.value, colors.value, styles.value]);
</script>

<template>
  <button
    class="btn gap-2 overflow-hidden text-clip whitespace-nowrap"
    :class="classObject"
  >
    <Icon v-if="props.iconStart" :name="props.iconStart" />
    <slot />
    <Icon v-if="props.iconEnd" :name="props.iconEnd" />
  </button>
</template>
