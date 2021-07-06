<template>
  <div class="details">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<script>
import DetailHeader from '@/components/details/pages/Header.vue'
import DetailBanner from '@/components/details/pages/Banner.vue'
export default {
  components: {
    DetailBanner,
    DetailHeader,
  },
}
</script>

<style scoped>
</style>