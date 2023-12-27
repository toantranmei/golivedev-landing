<script setup lang="ts">
definePageMeta({
  layout: 'thuc-hanh',
})

useHead({
  title: 'Sản phẩm hỗ trợ thực hành thực tế - Công ty công nghệ thực hành GoLiveDev Việt Nam',
})
</script>

<template>
  <organisms-try-it-registration-header />
  <organisms-try-it-who-choose-us-section />
  <organisms-try-it-why-choose-us-section />
  <!-- <ClientOnly>
    <organisms-core-values-section />
  </ClientOnly> -->
  <organisms-learning-model-section-th />
  <!-- <organisms-testimonials-section /> -->
  <organisms-try-it-registration-section-th />
  <!-- <organisms-try-it-faq-section /> -->
</template>