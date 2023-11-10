<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <Navbar class="absolute w-full" />
    <slot />
    <Footer />
  </div>
</template>
