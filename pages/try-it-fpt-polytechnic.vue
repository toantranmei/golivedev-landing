<script setup lang="ts">
definePageMeta({
  layout: 'fpt-layout',
})

useHead({
  title: 'Học thử miễn phí, trải nghiệm cách học khác biệt - Hệ thống đào tạo lập trình sáng tạo',
})
</script>

<template>
  <fpt-try-it-registration-header />
  <fpt-section1/>
  <fpt-section2/>
  <fpt-exclusive-model-section />
  <ClientOnly>
    <organisms-core-values-section />
  </ClientOnly>
  <organisms-learning-model-section />
  <organisms-testimonials-section />
  <organisms-try-it-registration-section />
  <organisms-try-it-faq-section />
</template>