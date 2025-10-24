<script setup lang="ts">
defineProps<{
  headline: string;
  subheadline: string;
}>();
const showText = ref(false);
onMounted(() => {
  setTimeout(() => (showText.value = true), 800);
});
</script>

<template>
  <Transition
    appear
    enter-from-class="opacity-0"
    enter-active-class="transition duration-300"
    enter-to-class="opacity-100"
  >
    <div v-if="showText" class="mx-5 max-w-5xl text-neutral-content">
      <p
        class="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl font-josefin"
      >
        {{ headline }}
      </p>
      <p class="text-lg font-normal md:text-3xl">
        {{ subheadline }}
      </p>
    </div>
  </Transition>
</template>
