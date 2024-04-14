<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <footer
    class="footer footer-center items-center bg-neutral p-4 text-neutral-content"
  >
    <p>{{ text }}</p>
  </footer>
</template>
