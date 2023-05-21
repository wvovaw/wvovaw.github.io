<script setup lang="ts">
import { StoryblokStory } from "@/types";
const data = useState<StoryblokStory>("siteConfig");
const menu_links = ref(data.value.content.menu_links);
const sitename = ref(data.value.content.sitename);

const showNav = ref(false);
onMounted(() => {
  setTimeout(() => (showNav.value = true), 300);
});
</script>

<template>
  <Transition
    enter-from-class="translate-y-[-10%]"
    enter-active-class="transition duration-300 ease-out"
  >
    <div v-if="showNav" class="w-full px-5">
      <header
        class="mx-auto my-5 flex h-24 max-w-7xl -skew-x-12 items-center justify-between font-medium text-neutral-content bg-neutral mix-blend-screen backdrop-blur-lg"
      >
        <NuxtLink
          to="/"
          class="mx-5 hidden font-sans text-5xl font-semibold antialiased sm:block"
          >{{ sitename }}</NuxtLink
        >
        <nav
          role="navigation"
          class="text-normal mx-5 flex h-min w-full justify-around font-semibold sm:w-1/2 sm:text-xl md:w-1/3 lg:text-2xl"
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
  </Transition>
</template>
