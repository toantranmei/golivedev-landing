<script setup lang="ts">
definePageMeta({
  layout: 'fpt-layout',
})

useHead({
  title: 'Học thử miễn phí, trải nghiệm cách học khác biệt - Hệ thống đào tạo lập trình sáng tạo',
})
</script>

<template>
  <mission-section1 />
  <mission-section2 />
  <mission-section3 />
  <mission-section4 />
  <mission-section5 />
  <mission-section6 />
  <mission-section7 />
  <ClientOnly>
    <organisms-core-values-section />
  </ClientOnly>
  <organisms-learning-model-section />
  <organisms-testimonials-section />
  <organisms-try-it-registration-section />
  <organisms-try-it-faq-section />
</template>