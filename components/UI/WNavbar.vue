<script setup lang="ts">
import type { Link } from "@/types";

interface MenuLink extends Link {
  id: number;
}

defineProps<{
  sitename: string;
  links: MenuLink[];
}>();
</script>

<template>
  <div class="w-full px-5">
    <header
      class="mx-auto my-5 flex h-24 max-w-7xl -skew-x-12 items-center justify-between bg-neutral font-medium text-neutral-content mix-blend-screen backdrop-blur-lg"
    >
      <NuxtLink
        to="/"
        class="mx-5 hidden font-sans text-5xl font-semibold antialiased sm:block"
      >
        {{ sitename }}
      </NuxtLink>
      <nav
        role="navigation"
        class="text-normal mx-5 flex h-min w-full justify-around font-semibold sm:w-1/2 sm:text-xl md:w-1/3 lg:text-2xl"
      >
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.url"
          :target="link.target"
          class="transition-color relative inline-block px-2 py-3 antialiased duration-150 hover:cursor-pointer hover:text-primary"
          v-text="link.title"
        />
      </nav>
    </header>
  </div>
</template>
