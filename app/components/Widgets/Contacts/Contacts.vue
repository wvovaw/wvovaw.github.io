<script setup lang="ts">
import type { IconLink } from "@types";
import ContactsLink from "./ContactsLink.vue";

interface ContactsProps {
  contacts: IconLink[];
}
defineProps<ContactsProps>();
</script>

<template>
  <GridsHFlex>
    <ContactsLink v-for="link of contacts" :key="link.url" :link="link" />
  </GridsHFlex>
</template>
