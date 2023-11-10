<script setup lang="ts">
interface MenuLink {
  id: number;
  title: string;
  url: string;
}

const siteName = "wvovaw";
const showNav = ref(false);
const menuLinks: MenuLink[] = [
  {
    id: 0,
    title: "About me",
    url: "#about",
  },
  {
    id: 1,
    title: "Projects",
    url: "#projects",
  },
  {
    id: 2,
    title: "Blog",
    url: "https://wvovaw.github.io/blog",
  },
];

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
        class="mx-auto my-5 flex h-24 max-w-7xl -skew-x-12 items-center justify-between bg-neutral font-medium text-neutral-content mix-blend-screen backdrop-blur-lg"
      >
        <NuxtLink
          to="/"
          class="mx-5 hidden font-sans text-5xl font-semibold antialiased sm:block"
        >
          {{ siteName }}
        </NuxtLink>
        <nav
          role="navigation"
          class="text-normal mx-5 flex h-min w-full justify-around font-semibold sm:w-1/2 sm:text-xl md:w-1/3 lg:text-2xl"
        >
          <a
            v-for="link in menuLinks"
            :key="link.id"
            :href="link.url"
            class="transition-color relative inline-block px-2 py-3 antialiased duration-150 hover:cursor-pointer hover:text-primary"
          >
            {{ link.title }}
          </a>
        </nav>
      </header>
    </div>
  </Transition>
</template>
