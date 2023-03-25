<script setup>
const props = defineProps({ blok: Object });
</script>

<template>
  <div v-editable="blok" class="flex justify-center">
    <div
      class="flex flex-col rounded-lg border border-zinc-400 bg-white shadow-lg dark:bg-neutral-700 lg:flex-row"
    >
      <img
        class="h-96 w-full rounded-t-lg object-cover lg:h-auto lg:max-w-lg lg:rounded-none lg:rounded-l-lg"
        :src="blok.image.filename"
        :alt="blok.image.alt"
      />
      <div
        class="bg flex flex-col justify-start p-6 lg:rounded-r-lg lg:shadow-lg lg:dark:bg-neutral-700"
      >
        <h5
          class="my-4 text-2xl font-extrabold italic text-neutral-800 dark:text-neutral-50"
        >
          {{ blok.title }}
        </h5>
        <p
          class="mb-4 text-lg font-normal text-neutral-600 dark:text-neutral-200"
        >
          {{ blok.description }}
        </p>
        <!-- TODO: add chips StoryblokComponent section to display used techs chips -->
        <p class="mt-auto flex flex-row gap-3">
          <StoryblokComponent
            v-for="blok in blok.links"
            :key="blok._uid"
            :blok="blok"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  z-index: 20;
  --s: 35px; /* control the size */
  --color: #323232;
  --darker: color-mix(in srgb, var(--color) 98%, #fff);

  background: linear-gradient(135deg, #0000 18.75%, var(--color) 0 31.25%, #0000 0),
    repeating-linear-gradient(45deg, var(--color) -6.25% 6.25%, var(--darker) 0 18.75%);
  background-size: var(--s) var(--s);
  border-radius: 5px;
}
</style>
