<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import Home from '@/components/home/Home.vue'
export default {
  components: {
    Home,
  },
}
</script>
<style lang="scss">
</style>
