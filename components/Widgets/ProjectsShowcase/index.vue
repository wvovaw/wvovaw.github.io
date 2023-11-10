<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import { type Project } from "@/types";

interface ProjectShowcaseProps {
  projects: Project[];
}
defineProps<ProjectShowcaseProps>();
</script>

<template>
  <div
    class="container mx-auto my-12 flex max-w-[1200px] flex-col justify-between gap-12"
  >
    <ProjectCard
      v-for="project of projects"
      :key="project.title"
      :project="project"
    />
  </div>
</template>
