<template>
  <div class="banner">
    <div class="banner-img">
      <img
        src="//img1.qunarzz.com/sight/p0/2105/52/52ea40eb013b1a9ca3.water.jpg_600x330_55f97a3e.jpg"
        alt
      />
    </div>
    <div class="banner-title">北京欢乐谷(AAAA景区)</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.banner {
  position: relative;
}
.banner-img {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}
.banner-img img {
  width: 100%;
}
.banner-title {
  position: absolute;
  font-size: 0.36rem;
  bottom: 0.3rem;
  left: 0.3rem;
}
</style>