<script setup lang="ts">
interface KeyValueProps {
  keyValue: { key: string; value: string };
}
defineProps<KeyValueProps>();
</script>

<template>
  <div class="space-x-4">
    <span class="font-extralight">{{ keyValue.key }}</span>
    <span class="font-bold italic">{{ keyValue.value }}</span>
  </div>
</template>
