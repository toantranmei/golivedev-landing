<script setup lang="ts">
import ogImage from "@/assets/images/golivedev-og-thumbnail.jpg"
useHead({
  meta: [{ property: 'og:image', content: ogImage }]
})
</script>

<template>
  <the-header-th />
  <slot />
  <the-footer-th />
</template>