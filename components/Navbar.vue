<script setup>
const data = toRaw(unref(await useState("siteConfig")));
const menu_links = ref(null);
const sitename = ref(null);

menu_links.value = data.story.content.menu_links;
sitename.value = data.story.content.sitename;
</script>

<template>
  <div class="w-full px-5">
    <header
      class="my-5 mx-auto flex h-24 max-w-7xl -skew-x-12 items-center justify-between bg-neutral text-neutral-content font-medium mix-blend-screen backdrop-blur-lg"
    >
      <NuxtLink
        to="/"
        class="mx-5 hidden font-sans text-5xl font-semibold antialiased sm:block"
        >{{ sitename }}</NuxtLink
      >

      <nav
        role="navigation"
        class="mx-5 flex h-min w-full justify-around text-normal sm:text-xl font-semibold sm:w-1/2 md:w-1/3 lg:text-2xl"
      >
        <NuxtLink
          v-for="link in menu_links"
          :key="link._uid"
          :to="link.link.url"
          class="transition-color relative inline-block px-2 py-3 antialiased duration-150 hover:cursor-pointer hover:text-primary"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>
    </header>
  </div>
</template>

<style scoped></style>
