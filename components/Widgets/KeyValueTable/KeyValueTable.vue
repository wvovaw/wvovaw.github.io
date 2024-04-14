<script setup lang="ts">
import KeyValueList from "./KeyValueList.vue";
import type { KVList } from "./types";

interface PersonalInfoProps {
  table: KVList[];
}
const props = defineProps<PersonalInfoProps>();
const colsNumber = computed(() => {
  switch (props.table.length) {
    case 0:
      return "grid-cols-0";
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-3";
    case 4:
      return "grid-cols-4";
    default: return undefined;
  }
});
</script>

<template>
  <div class="mx-auto flex flex-row sm:hidden">
    <KeyValueList :list="table.flat()" />
  </div>

  <div class="mt-5 hidden sm:grid" :class="colsNumber">
    <ul v-for="(list, ix) of table" :key="ix">
      <KeyValueList :list="list" />
    </ul>
  </div>
</template>
