<script setup>
const data = toRaw(unref(await useState("siteConfig")));
const contacts_links = ref(null);

contacts_links.value = data.story.content.contacts_links;
</script>

<template>
  <div
    class="background grid h-6 w-full place-content-center bg-zinc-800 font-roboto font-extralight text-gray-600"
  >
   2023
  </div>
</template>

<style scoped>
.background {
  --s: 60px;
  --c: #161616;
  --_s: calc(2 * var(--s)) calc(2 * var(--s));
  --_g: 35.36% 35.36% at;
  --_c: #0000 66%, #20222a 68% 70%, #0000 72%;
  background: radial-gradient(var(--_g) 100% 25%, var(--_c)) var(--s) var(--s) /
      var(--_s),
    radial-gradient(var(--_g) 0 75%, var(--_c)) var(--s) var(--s) / var(--_s),
    radial-gradient(var(--_g) 100% 25%, var(--_c)) 0 0 / var(--_s),
    radial-gradient(var(--_g) 0 75%, var(--_c)) 0 0 / var(--_s),
    repeating-conic-gradient(var(--c) 0 25%, #0000 0 50%) 0 0 / var(--_s),
    radial-gradient(var(--_c)) 0 calc(var(--s) / 2) / var(--s) var(--s) var(--c);
  /* background-attachment: fixed; */
}
</style>
