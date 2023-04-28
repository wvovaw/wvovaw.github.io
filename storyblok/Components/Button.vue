<script setup>
const props = defineProps({ blok: Object });
const color = ref(props.blok.color);
const size = ref(props.blok.size);
const outline = ref(props.blok.outline);
const wide = ref(props.blok.wide);
const disabled = ref(props.blok.disabled);
const iconStart = ref(props.blok.iconStart);
const iconEnd = ref(props.blok.iconEnd);
const label = ref(props.blok.label);
const link = ref(props.blok.link.url);
const target = ref(props.blok.link.target);
const colorClass = {
  "": color.value === "base-100",
  "": color.value === "base-200",
  "": color.value === "base-300",
  "btn-primary": color.value === "primary",
  "btn-secondary": color.value === "secondary",
  "btn-accent": color.value === "accent",
  "btn-info": color.value === "info",
  "btn-success": color.value === "success",
  "btn-warning": color.value === "warning",
  "btn-error": color.value === "error",
};
const sizeClass = {
  "btn-xs": size.value === "tiny",
  "": size.value === "small",
  "": size.value === "normal",
  "btn-lg": size.value === "large",
};
const stylesClass = {
  "btn-outline": outline.value,
  "btn-wide": wide.value,
  "btn-disabled": disabled.value,
};

const classBinding = reactive([colorClass, sizeClass, stylesClass]);
</script>

<template>
  <a
    v-editable="blok"
    type="link"
    class="btn gap-1"
    :class="classBinding"
    :href="link"
    :target="target"
  >
    <i v-if="iconStart" class="h-6 w-6" v-html="iconStart" />
    {{ label }}
    <i v-if="iconEnd" class="h-6 w-6" v-html="iconEnd" />
  </a>
</template>
