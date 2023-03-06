<script setup>
import { onMounted, watch } from "vue";

const props = defineProps({ blok: Object });
// const level = ref(0);
// let interval = null;
// onMounted(() => {
//   interval = setInterval(() => (level.value += 1), 100);
// });
// watch(level, () => {
//   console.log(level);
//   if (level.value === blok.level) clearInterval(interval);
// });
</script>

<template>
  <div v-editable="blok" class="flex justify-center">
    <div
      class="block h-fit w-36 rounded-lg bg-zinc-800 p-2 text-center text-gray-300 shadow-lg"
    >
      <div class="mx-3">
        <h5 class="text-2xl font-normal leading-tight">{{ blok.title }}</h5>
        <i class="m-2 mb-0 flex justify-center" v-html="blok.svg"> </i>
      </div>

      <sub class="font-light italic"> {{ blok.level }} % </sub>
      <div class="h-2 w-full rounded-full bg-gray-300">
        <div
          class="h-2 rounded-full bg-green-500 p-0.5"
          :style="'width: ' + blok.level + '%'"
        ></div>
      </div>
    </div>
  </div>
</template>
