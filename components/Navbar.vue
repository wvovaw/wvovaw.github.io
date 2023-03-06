<script setup>
const data = toRaw(unref(await useState("siteConfig")));
const menu_links = ref(null);
const sitename = ref(null);
const navbar_blend_mode = ref(null);

menu_links.value = data.story.content.menu_links;
sitename.value = data.story.content.sitename;
navbar_blend_mode.value = data.story.content.navbar_blend_mode;
</script>

<template>
  <div class="w-full">
    <header
      class="my-5 mx-auto flex h-24 max-w-7xl -skew-x-12 items-center justify-between bg-gray-300 font-medium"
      :class="navbar_blend_mode"
    >
      <NuxtLink
        to="/"
        class="mx-5 font-sans text-5xl font-semibold antialiased"
        >{{ sitename }}</NuxtLink
      >

      <nav
        role="navigation"
        class="mx-5 flex h-min w-1/2 justify-between text-2xl font-semibold md:w-1/3"
      >
        <NuxtLink
          v-for="link in menu_links"
          :key="link._uid"
          :to="link.link.url"
          class="transition-color relative inline-block px-2 py-3 antialiased duration-300 hover:cursor-pointer hover:bg-gray-500 hover:text-yellow-100 focus:bg-gray-500 focus:text-yellow-100"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>
    </header>
  </div>
</template>

<style scoped></style>
