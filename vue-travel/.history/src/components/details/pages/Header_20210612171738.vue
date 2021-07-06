<template>
  <div class="header">
    <div class="header-return">
      <span class="border-return"></span>
      <span class="iconfont return">&#xe658;</span>
    </div>
    <div class="header">
      <div class="header-left">
        <span class="iconfont">&#xe658;</span>
      </div>
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
.border-return {
  display: block;
  background: #000;
  height: 0.72rem;
  width: 0.72rem;
  opacity: 0.4;
  margin-top: 0.2rem;
  border-radius: 0.36rem;
}
.return {
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  line-height: 0.72rem;
  width: 0.72rem;
  text-align: center;
  text-indent: 0.1rem;
  font-size: 0.6rem;
  padding-top: 0.2rem;
}
</style>