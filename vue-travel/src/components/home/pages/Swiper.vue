<template>
  <div class="header-swiper">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" alt />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
    }
  },
  props: ['swiperList'],
}
</script>

<style scoped lang='stylus'>
.header-swiper {
  background: #ccc;
  width: 100%;
  height: 0;
  padding-bottom: 26.67%;
}

.header-swiper img {
  width: 100%;
  height: 2rem;
  object-fit: contain;
}

.header-swiper>>> .swiper-pagination-bullet-active {
  background: $bgcolor;
}
</style>