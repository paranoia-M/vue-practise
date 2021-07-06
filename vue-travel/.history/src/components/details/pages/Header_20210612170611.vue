<template>
  <div class="header">
    <div class="header-return">
      <span class="return"></span>
      <span class="iconfont">&#xe658;</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  height: 0.72rem;
  width: 0.72rem;
  position: absolute;
  display: block;
  left: 0.1rem;
  right: 0.1rem;
  z-index: 999;
  background: none;
}
.return {
  background: #000;
  height: 0.72rem;
  width: 0.72rem;
  opacity: 0.5;
}
</style>