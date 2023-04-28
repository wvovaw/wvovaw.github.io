<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div class="mx-auto flex flex-row sm:hidden">
    <ul class="w-full">
      <li
        class="text-md w-full border-b border-base-content px-4 py-4 font-normal last-of-type:border-b-0"
        v-for="blok of [...blok.col1.tbody, ...blok.col2.tbody]"
      >
        <span class="font-extralight">{{
          blok.body[0].value + "   "
        }}</span>
        <span class="font-bold italic">{{
          blok.body[1].value
        }}</span>
      </li>
    </ul>
  </div>

  <div class="mt-5 hidden grid-cols-2 sm:grid">
    <ul>
      <li
        class="w-full overflow-clip border-b border-base-content py-4 text-sm font-normal last-of-type:border-b-0 sm:px-6 lg:text-lg"
        v-for="blok of blok.col1.tbody"
      >
        <span class="font-extralight">{{
          blok.body[0].value + "   "
        }}</span>
        <span class="font-bold italic">{{
          blok.body[1].value
        }}</span>
      </li>
    </ul>
    <ul>
      <li
        class="w-full border-b border-base-content py-4 text-sm font-normal last-of-type:border-b-0 sm:px-6 lg:text-lg"
        v-for="blok of blok.col2.tbody"
      >
        <span class="font-extralight">{{
          blok.body[0].value + "   "
        }}</span>
        <span class="font-bold italic">{{
          blok.body[1].value
        }}</span>
      </li>
    </ul>
  </div>
</template>
