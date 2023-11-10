<script setup lang="ts">
import TechChip from "./TechChip.vue";
import { WButton } from "@/components/UI";
import { type Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}
defineProps<ProjectCardProps>();
</script>

<template>
  <div class="flex justify-center">
    <div
      class="flex flex-col rounded-lg border border-base-content bg-neutral shadow-lg lg:flex-row"
    >
      <img
        class="w-full rounded-t-lg object-fill lg:h-auto lg:max-w-lg lg:rounded-none lg:rounded-l-lg"
        :src="project.image.src"
        :alt="project.image.alt"
      />
      <div
        class="bg flex flex-col justify-start p-6 lg:rounded-r-lg lg:shadow-lg"
      >
        <h5 class="my-3 text-2xl font-extrabold italic">
          {{ project.title }}
        </h5>
        <p class="mb-3 text-xl font-normal">
          {{ project.description }}
        </p>
        <div class="my-3 flex flex-row flex-wrap gap-4">
          <TechChip
            v-for="tech of project.techs"
            :key="tech.title"
            :tech="tech"
          />
        </div>
        <div class="mt-auto flex flex-row flex-wrap gap-3">
          <NuxtLink
            v-for="link of project.links"
            :key="link.url"
            :to="link.url"
            :target="link.target"
          >
            <WButton :icon-start="link.icon" :color="link.color">
              {{ link.title }}
            </WButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  z-index: 20;
  --s: 35px; /* control the size */
  --color: hsl(var(--b1));
  --darker: hsl(var(--b2));

  background: linear-gradient(
      135deg,
      #0000 18.75%,
      var(--color) 0 31.25%,
      #0000 0
    ),
    repeating-linear-gradient(
      45deg,
      var(--color) -6.25% 6.25%,
      var(--darker) 0 18.75%
    );
  background-size: var(--s) var(--s);
  border-radius: 5px;
}
</style>
