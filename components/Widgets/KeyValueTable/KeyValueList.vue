<script setup lang="ts">
import KeyValue from "./KeyValue.vue";
import { type KVList } from "./types";

interface KeyValueListProps {
  list: KVList;
}
defineProps<KeyValueListProps>();
</script>

<template>
  <ul class="w-full">
    <li
      v-for="kv of list"
      :key="kv.key + kv.value"
      class="w-full overflow-visible border-b border-base-content py-4 text-sm font-normal last-of-type:border-b-0 sm:px-6 xl:text-lg"
    >
      <KeyValue :key-value="kv" />
    </li>
  </ul>
</template>
