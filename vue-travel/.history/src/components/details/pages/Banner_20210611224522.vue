<template>
  <div class="banner">
    <div class="banner-img">
      <img
        src="//img1.qunarzz.com/sight/p0/2105/52/52ea40eb013b1a9ca3.water.jpg_600x330_55f97a3e.jpg"
        alt
      />
    </div>
    <div class="banner-title">北京欢乐谷(AAAA景区)</div>
    <div class="img-swiper">
      <img src alt />
    </div>
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
  bottom: 0.4rem;
  left: 0.3rem;
  color: #fff;
}
.img-swiper {
  background: #000;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>