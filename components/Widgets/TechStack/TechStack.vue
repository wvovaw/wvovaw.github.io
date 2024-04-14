<script setup lang="ts">
import TechCard from "./TechCard.vue";
import { type Tech } from "@/types";

interface TechStackProps {
  techs: Tech[];
}
defineProps<TechStackProps>();
</script>

<template>
  <div
    class="mt-5 flex h-full flex-row flex-wrap justify-around gap-8 md:grid md:grid-cols-3 md:justify-between lg:grid-cols-3 xl:grid-cols-4"
  >
    <TechCard v-for="tech of techs" :key="tech.title" :tech="tech" />
  </div>
</template>
