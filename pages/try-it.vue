<script setup lang="ts">
definePageMeta({
  layout: 'default-layout',
})

useHead({
  title: 'Học thử miễn phí, trải nghiệm cách học khác biệt - Hệ thống đào tạo lập trình sáng tạo',
})
</script>

<template>
  <organisms-try-it-registration-header />
  <organisms-try-it-who-choose-us-section />
  <organisms-try-it-why-choose-us-section />
  <ClientOnly>
    <organisms-core-values-section />
  </ClientOnly>
  <organisms-learning-model-section />
  <organisms-testimonials-section />
  <organisms-try-it-registration-section />
  <organisms-try-it-faq-section />
</template>