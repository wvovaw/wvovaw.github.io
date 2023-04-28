<script setup>
const data = toRaw(unref(await useState("siteConfig")));
const contacts_links = ref(null);

contacts_links.value = data.story.content.contacts_links;
</script>

<template>
  <footer
    class="footer footer-center items-center bg-neutral p-4 text-neutral-content"
  >
    <p>2023</p>
  </footer>
</template>
