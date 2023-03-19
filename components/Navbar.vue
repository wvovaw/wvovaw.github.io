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
  <div class="w-full px-5">
    <header
      class="flex my-5 mx-auto h-24 max-w-7xl -skew-x-12 items-center justify-between bg-gray-300 font-medium"
      :class="navbar_blend_mode"
    >
      <NuxtLink
        to="/"
        class="hidden sm:block mx-5 font-sans text-5xl font-semibold antialiased"
        >{{ sitename }}</NuxtLink
      >

      <nav
        role="navigation"
        class="mx-5 flex h-min sm:w-1/2 justify-between text-xl lg:text-2xl font-semibold md:w-1/3"
      >
        <NuxtLink
          v-for="link in menu_links"
          :key="link._uid"
          :to="link.link.url"
          class="transition-color relative inline-block px-2 py-3 antialiased duration-300 hover:cursor-pointer hover:text-yellow-100"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>
    </header>
  </div>
</template>

<style scoped></style>
