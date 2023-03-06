<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div class="mt-5 grid grid-cols-2">
    <ul>
      <li
        class="w-full border-b border-gray-400 px-6 py-4 text-lg font-normal last-of-type:border-b-0"
        v-for="blok of blok.col1.tbody"
      >
        <span class="font-extralight text-gray-300">{{
          blok.body[0].value + "   "
        }}</span>
        <span class="font-bold italic text-gray-50">{{
          blok.body[1].value
        }}</span>
      </li>
    </ul>
    <ul>
      <li
        class="w-full border-b border-gray-400 px-6 py-4 text-lg font-normal last-of-type:border-b-0"
        v-for="blok of blok.col2.tbody"
      >
        <span class="font-extralight text-gray-300">{{
          blok.body[0].value + "   "
        }}</span>
        <span class="font-bold italic text-gray-50">{{
          blok.body[1].value
        }}</span>
      </li>
    </ul>
  </div>
</template>
