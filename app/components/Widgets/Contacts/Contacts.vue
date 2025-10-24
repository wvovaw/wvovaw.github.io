<script setup lang="ts">
import type { IconLink } from "@types";
import { HFlex } from "@/components/Grids";
import ContactLink from "./ContactLink.vue";

interface ContactsProps {
  contacts: IconLink[];
}
defineProps<ContactsProps>();
</script>

<template>
  <HFlex>
    <ContactLink v-for="link of contacts" :key="link.url" :link="link" />
  </HFlex>
</template>
